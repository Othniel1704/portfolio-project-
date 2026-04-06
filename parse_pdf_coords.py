import pdfplumber

def extract_coords():
    with pdfplumber.open('./public/tableau_synthese.pdf') as pdf:
        page = pdf.pages[0]
        # Find column x-coordinates based on B1.1 to B1.6 text
        words = page.extract_words()
        
        # the text is rotated or normal, let's just find "Gérer le", "Répondre", "Développer", etc.
        cols = []
        for word in words:
            # Look for Xs
            if word['text'] == 'X':
                cols.append( (word['x0'], word['top']) )
        
        # print all X coordinates to see the grid
        for c in sorted(cols, key=lambda x: (x[1], x[0])):
            print(f"X at x={c[0]:.1f}, y={c[1]:.1f}")
            
        print("---")
        for word in words:
            if word['text'] in ['Mise', 'Audit', 'Développement', 'Gestion', 'Portfolio', 'Application', 'configuration', 'Stage']:
                print(f"TEXT: {word['text']} at y={word['top']:.1f}")

if __name__ == "__main__":
    extract_coords()
