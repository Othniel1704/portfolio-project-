import PyPDF2

def extract_text(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text

if __name__ == "__main__":
    with open("out.txt", "w", encoding="utf-8") as f:
        f.write(extract_text("./public/tableau_synthese.pdf"))
