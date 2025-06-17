# Stock Analysis Using Python

This repository contains a comprehensive stock analysis project focusing on the semiconductor market, with a deep dive into Taiwan Semiconductor Manufacturing Company (TSM). The project leverages Python for data analysis and machine learning, and presents the findings through an interactive web application.

## Project Structure

The project is organized into the following directories:

```
.
├── index.html
├── style.css
├── script.js
├── canle_chart.html
├── stock_report.html
├── assets/
│   └── images/
│       ├── Anothercorrelation.png
│       ├── Closing_price.png
│       ├── Confusionmatrix.png
│       ├── Correlation.png
│       ├── Daily_return.png
│       ├── Daily_return_histogram.png
│       ├── MA.png
│       ├── Risk-return.png
│       ├── TA_visulization.png
│       ├── TSM-closing-price.png
│       └── Trading_Volume.png
├── data/
│   └── # Stock data files will be stored here
├── notebooks/
│   └── stock-market-analysis-final.ipynb
├── requirements.txt
└── README.md
```

- **Root Directory**: Contains all the files related to the web application (HTML, CSS, JavaScript) directly, making it compatible with GitHub Pages.
    - `assets/images/`: Stores all the image assets used in the web application, such as charts and plots generated from the analysis.
- `data/`: This directory is intended to store all raw and processed stock data files.
- `notebooks/`: Contains the Jupyter Notebooks used for data collection, analysis, and model development.
- `requirements.txt`: Lists all the Python dependencies required for the project.
- `README.md`: This file, providing an overview of the project, its structure, and instructions for setup and usage.

## Features

- **Data Collection**: Historical stock data retrieved from Yahoo Finance API for major semiconductor companies (TSM, NVDA, IONQ, AMD).
- **Technical Analysis**: Comprehensive analysis including moving averages, RSI, Bollinger Bands, and MACD.
- **LSTM Modeling**: Advanced Long Short-Term Memory neural network implementation for stock price prediction.
- **Risk Assessment**: Detailed risk-return analysis, correlation studies, and volatility assessment.
- **Interactive Web Application**: A user-friendly web interface to visualize analysis results and model predictions.

## Setup and Usage

To set up and run this project locally, follow these steps:

### Prerequisites

- Python 3.x
- Jupyter Notebook

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Khoaph1709/Stock-Analysis-Using-Python.git
   cd Stock-Analysis-Using-Python
   ```

2. **Create a virtual environment (recommended)**:
   It is highly recommended to create a virtual environment to manage project dependencies and avoid conflicts with other Python projects.
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:
   - On macOS and Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```

4. **Install Python dependencies**:
   With the virtual environment activated, install the required libraries using `pip`:
   ```bash
   pip install -r requirements.txt
   ```

### Running the Analysis

1. **Open the Jupyter Notebook**:
   Navigate to the `notebooks/` directory and open the `stock-market-analysis-final.ipynb` notebook using Jupyter.
   ```bash
   jupyter notebook notebooks/stock-market-analysis-final.ipynb
   ```
2. **Run all cells**: Execute all cells in the notebook to perform data collection, analysis, and model training. This will also generate the necessary data files in `data/`.

### Viewing the Web Application

This project is configured for easy deployment with GitHub Pages. Once pushed to your GitHub repository, you can enable GitHub Pages in your repository settings.

1. **Local Access**:
   Open `index.html` directly in your web browser from the root directory of the cloned repository.
   ```bash
   # On Linux/macOS
   open index.html
   # On Windows
   start index.html
   ```
   Alternatively, you can use a local web server (e.g., Python's `http.server`) to serve the current directory.
   ```bash
   python -m http.server 8000
   ```
   Then, open your browser and go to `http://localhost:8000`.

2. **GitHub Pages Access**:
   After pushing this updated structure to your GitHub repository, go to your repository settings on GitHub. Under the "Pages" section, select the `main` (or `master`) branch and the `/ (root)` folder as the source for GitHub Pages. Your website will then be accessible at `https://<YOUR_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

MIT License

## Contact

For any questions or feedback, please contact khoa555.rubik@gmail.com.

