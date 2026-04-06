import pdfplumber

def extract_matrix():
    with pdfplumber.open('./public/tableau_synthese.pdf') as pdf:
        page = pdf.pages[0]
        # Crop the middle to bottom part of the page where the table is
        # Or just extract table with different vertical strategy
        tables = page.extract_tables({"vertical_strategy": "text", "horizontal_strategy": "text"})
        if not tables:
            tables = page.extract_tables()

        for i, table in enumerate(tables):
            for row in table:
                if row:
                    clean_row = [str(cell).strip().replace('\n', ' ') if cell is not None else '' for cell in row]
                    if len(clean_row) > 1:
                        has_x = any('X' in c for c in clean_row[1:])
                        if has_x:
                            print(clean_row[0][:50] + " | " + " | ".join(['X' if 'X' in c else '-' for c in clean_row[-7:]]))

if __name__ == "__main__":
    extract_matrix()
