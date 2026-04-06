import pdfplumber

def extract_tables():
    with pdfplumber.open('./public/tableau_synthese.pdf') as pdf:
        for i, page in enumerate(pdf.pages):
            print(f"--- PAGE {i+1} ---")
            for table in page.extract_tables():
                for row in table:
                    # Clean up the output string, keep None as empty string
                    clean_row = [str(cell).strip().replace('\n', ' ') if cell is not None else '' for cell in row]
                    print(" | ".join(clean_row))

if __name__ == "__main__":
    extract_tables()
