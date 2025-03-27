const infoContent = {
    Political: `
        <h2>Political (P)</h2>
        <p><strong>1. Regulatory approvals:</strong> The company must comply with Food and Drug Administration (<a href="https://www.fda.gov/about-fda/fda-organization" target="_blank">FDA</a>) regulations for AI-based medical diagnostics, such as <a href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/abbreviated-510k-program" target="_blank">510(k) clearance</a> or <a href="https://www.fda.gov/medical-devices/premarket-submissions/de-novo-classification-request" target="_blank">De Novo classification</a>.</p>
        <p><strong>2. Healthcare policies:</strong> Policies like the <a href="https://www.hhs.gov/healthcare/about-the-aca/index.html" target="_blank">Affordable Care Act (ACA)</a>) impact insurance coverage and accessibility for new diagnostic tools.</p>
        <p><strong>3. Data protection laws:</strong> Compliance with Health Insurance Portability and Accountability Act (<a href="https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" target="_blank">HIPAA</a>) in the U.S. and <a href="https://gdpr-info.eu/" target="_blank">General Data Protection Regulation (GDPR)</a> (if dealing with international data) is crucial for genetic data privacy.</p>
        <p><strong>4. Government funding:</strong> Institutions like the <a href="https://www.nih.gov/about-nih/what-we-do" target="_blank">National Institutes of Health (NIH)</a>) offer grants and incentives for AI-driven medical innovations, potentially supporting the company.</p>
    `,
    Economic: `
        <h2>Economic (E)</h2>
        <p><strong>1. Healthcare spending:</strong> The U.S. healthcare expenditure is among the highest globally, which could encourage investment in cutting-edge diagnostics.</p>
        <p><strong>2. Cost of AI adoption:</strong> Developing and maintaining AI models for genetic analysis requires significant Research & Development (R&D) investment.</p>
        <p><strong>3. Insurance & reimbursement:</strong> If insurance companies recognize AI-based genetic diagnostics as a reimbursable medical service, adoption could increase significantly.</p>
        <p><strong>4. Market demand:</strong> An estimated 3.1 million U.S. adults suffer from Inflammatory Bowel Disease (IBD), creating a sizable potential customer base.</p>
    `,
    Social: `
        <h2>Social (S)</h2>
        <p><strong>1. Growing awareness of genetic testing:</strong> More individuals are seeking genetic insights for disease risk and personalized treatment.</p>
        <p><strong>2. Patient trust in AI:</strong> Some patients and doctors may be skeptical about AI-based diagnostics, requiring strong clinical validation.</p>
        <p><strong>3. Aging population:</strong> An increasing number of chronic diseases, including autoimmune disorders, may drive demand for innovative diagnostic tools.</p>
    `,
    Technological: `
        <h2>Technological (T)</h2>
        <p><strong>1. Advances in AI and genomics:</strong> Improved machine learning models and <a href="https://www.genomeweb.com/sequencing" target="_blank">genetic sequencing methods</a> enhance diagnostic accuracy.</p>
        <p><strong>2. Integration with Electronic Health Records (EHRs):</strong> AI-based diagnostics should seamlessly integrate with existing EHR systems to streamline healthcare workflows.</p>
        <p><strong>3. Cybersecurity risks:</strong> Genetic data is highly sensitive, requiring strong encryption and security measures to prevent breaches.</p>
        <p><strong>4. Telemedicine & digital health:</strong> The rise of <a href="https://www.ncbi.nlm.nih.gov/books/NBK45440/" target="_blank">telemedicine</a> supports remote diagnostic tools, which aligns with AI-based solutions.</p>
    `,
    Legal: `
        <h2>Legal (L)</h2>
        <p><strong>1. Genetic data regulations:</strong> Laws like the <a href="https://www.eeoc.gov/gina-genetic-information-nondiscrimination" target="_blank">Genetic Information Nondiscrimination Act (GINA)</a>) protect against genetic discrimination but also impose compliance burdens on companies handling genetic data.</p>
        <p><strong>2. Medical malpractice laws:</strong> The company must ensure that AI-generated diagnostic recommendations are medically sound to avoid liability issues.</p>
        <p><strong>3. Patent protection:</strong> Securing <a href="https://www.uspto.gov/patents" target="_blank">intellectual property (IP)</a> for proprietary AI algorithms could provide a competitive advantage.</p>
    `,
    Environmental: `
        <h2>Environmental (E)</h2>
        <p><strong>1. Sustainability in biotech:</strong> Ethical sourcing of biotech lab materials and minimizing the environmental impact of genetic testing processes.</p>
        <p><strong>2. Waste disposal:</strong> Compliance with <a href="https://www.epa.gov/rcra" target="_blank">biomedical waste regulations</a> and implementing energy-efficient data center operations to reduce carbon footprint.</p>
    `
};

/* Función para mostrar el contenido de los botones */
function showInfo(category) {
    const infoContainer = document.getElementById('info-container');
    const mainContainer = document.getElementById('main-container');
    mainContainer.style.display = 'none';
    infoContainer.style.display = 'block';
    infoContainer.style.opacity = '0';
    document.getElementById('info-content').innerHTML = infoContent[category];
    setTimeout(() => {
        infoContainer.style.opacity = '1';
    }, 10); /* Tiempo en ms para cambiar la opacidad a 1 (lo que crea el efecto fade-in) */
}

/* Función para regresar a los botones principales*/
function goBack() {
    const infoContainer = document.getElementById('info-container');
    const mainContainer = document.getElementById('main-container');
    infoContainer.style.opacity = '0';
    setTimeout(() => {
        infoContainer.style.display = 'none';
        mainContainer.style.display = 'flex';
    }, 10); /* Tiempo en ms para cambiar la opacidad a 1 (lo que crea el efecto fade-in) */
}