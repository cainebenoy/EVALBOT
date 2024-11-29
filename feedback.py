from ollama import Ollama

# Initialize Ollama model for feedback generation
ollama = Ollama(model_name="feedback_model")

def generate_feedback(student_answer, reference_text):
    # Generate detailed feedback using the Ollama model
    prompt = f"Compare the following:\n\nStudent Answer: {student_answer}\n\nReference: {reference_text}\n\nProvide detailed feedback."
    feedback = ollama.chat(prompt)
    return feedback
