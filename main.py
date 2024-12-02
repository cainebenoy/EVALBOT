from fastapi import FastAPI, UploadFile
from ocr import ocr_answer_sheet
from embeddings import generate_embeddings, store_embeddings, retrieve_similar_content, evaluate_answer, generate_report
from feedback import generate_feedback
from llmware import LLMWareClient
import pinecone

# Initialize FastAPI app
app = FastAPI()

# Initialize Pinecone and LLMWare clients
pinecone.init(api_key="pcsk_4W8J2V_9PxDugonc2vKaa9dBynY4uS9kro38JNnjo1zgSLCdpMQLeGzvmMfmm4ynWios6F", environment="us-west1-gcp")
index = pinecone.Index("exam-eval")
llmware_client = LLMWareClient(api_key="your_llmware_api_key")  # Replace with your actual API key

@app.post("/upload")
async def upload_file(file: UploadFile):
    # OCR extraction of student answers
    text = ocr_answer_sheet(file.file)

    # Assuming you have a predefined answer key
    answer_key = {
        "q1": "Explain the process of photosynthesis.",
        "q2": "Define Newton's second law of motion.",
        "q3": "Describe the structure of a human heart.",
    }

    # Generate embeddings for the answer key and store them in Pinecone
    for q_id, answer in answer_key.items():
        vectors = generate_embeddings(answer)  # Using LLMWare for embeddings
        store_embeddings(answer, vectors, q_id)

    # Process student answers and generate the report
    report = generate_report(text, answer_key)

    return {"report": report}
