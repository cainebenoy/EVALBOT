Here's a **GitHub README** tailored for your project: 

---

# AI-Driven Exam Evaluation System

This repository contains the implementation of an **AI-driven exam evaluation system** designed to streamline the process of checking and grading answer sheets. The system uses **LLMWare AI**, **Pinecone**, and **Tesseract OCR** to extract, analyze, and evaluate student answers with high precision. It integrates **semantic similarity** and **feedback generation** to provide detailed performance insights for students.

---

## 🎯 **Key Features**

- **OCR Integration**: Extracts text from scanned answer sheets using Tesseract OCR or PDF-to-image conversion.
- **AI-Powered Answer Evaluation**: 
  - Generates vector embeddings using LLMWare AI.
  - Performs semantic similarity searches with Pinecone.
- **Feedback Generation**: Delivers detailed, question-specific feedback using Ollama's GPT-based models.
- **Automated Grading**: Scores student answers based on comparison with a structured answer key.
- **Web Interface**: A simple frontend for uploading answer sheets and viewing results.
- **Scalable Architecture**: Modular design with API endpoints built using FastAPI.

---

## 📁 **Project Structure**

```plaintext
.
├── main.py               # Entry point for the backend server
├── embeddings.py         # Embedding generation, similarity search, and evaluation logic
├── ocr.py                # OCR text extraction functionality
├── feedback.py           # Provides review report based on the answering     
├── requirements.txt      # Dependency list
├── templates/            # Frontend HTML templates (if applicable)
├── static/               # Frontend assets (CSS, JS)
└── README.md             # Project documentation
```

---

## 🚀 **Getting Started**

### Prerequisites

- Python 3.9+
- Node.js (for Ollama integration)
- Virtual Environment Manager (optional but recommended)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ai-exam-evaluation.git
   cd ai-exam-evaluation
   ```

2. Set up a Python virtual environment:
   ```bash
   python -m venv myenv
   source myenv/bin/activate  # Linux/Mac
   myenv\Scripts\activate     # Windows
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Install Node.js dependencies (for Ollama):
   ```bash
   npm install @ollama/sdk
   ```

5. Install and configure **Pinecone** and **LLMWare**:
   - Create accounts on [Pinecone](https://pinecone.io/) and [LLMWare](https://llmware.com).
   - Obtain API keys and update them in your environment variables.

---

## ⚙️ **Usage**

### 1. Run the Backend Server
Start the FastAPI backend server:
```bash
uvicorn main:app --reload
```

### 2. Access the Web Interface
Navigate to `http://127.0.0.1:8000` in your browser to:
- Upload scanned answer sheets.
- View evaluation scores and feedback.

---

## 🛠️ **Core Functionalities**

### Text Extraction (OCR)
Uses Tesseract to extract text from scanned PDF answer sheets:
```python
from ocr import ocr_answer_sheet

text = ocr_answer_sheet("path/to/answer_sheet.pdf")
```

### Embedding Generation
Converts text into vector embeddings using LLMWare:
```python
from embeddings import generate_embeddings

vectors = generate_embeddings("This is a sample text.")
```

### Semantic Similarity Search
Queries the Pinecone vector database to find the closest matching content:
```python
from embeddings import retrieve_similar_content

results = retrieve_similar_content("student answer text")
```

### Answer Evaluation
Compares student answers to the answer key using cosine similarity:
```python
from embeddings import evaluate_answer

score = evaluate_answer("student answer", "answer key vectors")
```

### Feedback Generation
Generates detailed feedback for student answers:
```python
from embeddings import generate_feedback

feedback = generate_feedback("student answer", "reference answer")
```

---

## 🌐 **Deployment**

### Backend Deployment
Deploy the backend on cloud platforms like **Heroku**, **AWS**, or **Google Cloud**:
1. Prepare a `Dockerfile` (if needed).
2. Use CI/CD tools to automate deployment.

### Frontend Deployment
Deploy the frontend on **Netlify**, **Vercel**, or **AWS Amplify**:
- Host static files (HTML/CSS/JS).
- Connect to the backend via API endpoints.

---

## 🧪 **Testing and Debugging**

1. Use sample answer sheets (PDFs or images) to test OCR and embedding generation.
2. Verify the similarity search using example text inputs.
3. Debug using:
   ```bash
   python -m pdb main.py
   ```

---

## 🤝 **Contributing**

We welcome contributions to improve the project. Please:
1. Fork the repository.
2. Create a new feature branch (`feature/your-feature`).
3. Submit a pull request.

---

## 🛡️ **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📞 **Contact**

For any queries or support, reach out via:

- **Email**: cainebenoy@gmail.com
- **GitHub**: (https://github.com/cainebenoy)

Happy coding! 🚀

--- 

Let me know if you'd like to add or adjust anything!
