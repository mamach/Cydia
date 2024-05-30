1. Data Warehouse
2. Data Mart
3. Data Lake
4. Data Pipeline
5. Data Quality
6. Data Mining



# Data Warehouse
- A data warehouse is a large, centralized repository of integrated data collected from various sources.
- External Sources -> ETL -> Datawarehouse(connects to Data Mart) -> Data Mining

# Data Mart
- A specialized, smaller subset of a datawarehouse focused on specific business line or team.
- Tailored to meet the specific data needs of that group.
- External Source -> ETL -> Data Warehouse -> Connects to multiple Data Marts


# Data Lake
- A vast pool of raw, unstructured data kept in its native format until needed.
- Offering flexibility and scalability for storing big data.
- Data Sources -> Data Lake -> Data Transform -> Data Ready for Use

# Data Pipeline
- The series of processes involved in moving data from one system to another.
- Includes Extraction, Transform and Loading of data.
- External Sources ->(Data Extraction) Staging Area -> (Transform & Load) -> Transform.

# Data Quality
- Data quality is defined as the degree to which data meets a company's expectations of accuracy, validity, completeness and consistency.
- Data Source -> Data Quality(Cleansing Standards, IDQ Mapping, Model Repo) -> Target

# Data Mining
- The art of uncovering hidden patterns and insights. 
- Data mining involves sifting through large datasets to identify trends, correlations and anomalies.
- Database -> (Data Modeling)(Database Queries) Data Mining Application -> (Results)(Data Mining Queries)Frontend


# References
1. [Data Concepts](https://twitter.com/tut_ml/status/1764510951162745139)
2. [Data Engineering Courses](https://www.mltut.com/best-data-engineering-courses-online/)
