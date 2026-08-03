# Intro
- Model deployment is the process of trained models being integrated into practical applications.
- This includes defining the 
	- necessary environment
	- specifying how input data is introduced into the model and output is produced.
	- capacity to analyze new data and provide relevant predictions or categorizations.
## Steps
- Data Preprocessing
- Model Training
- Model Packaging
- Model Testing
- Model Deployment

# Data Processing
- Deal with missing values.
	- Impute missing values with meanvalues.
	- Delete rows/columns.
- categorical variable transformation from qualitative data to quantitative data.
	- One hot encoding or label encoding.
- Normalize and standardize numerical features to common scale.

```
import pandas as pd
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler, MinMaxScaler

# Load your data
df = pd.read_csv('your_data.csv')

# Handle missing values
imputer_mean = SimpleImputer(strategy='mean')
df['numeric_column'] = imputer_mean.fit_transform(df[['numeric_column']])

# Encode categorical variables
one_hot_encoder = OneHotEncoder()
encoded_features = one_hot_encoder.fit_transform(df[['categorical_column']]).toarray()
encoded_df = pd.DataFrame(encoded_features, columns=one_hot_encoder.get_feature_names_out(['categorical_column']))

# Normalize and standardize numerical features
# Standardization (zero mean, unit variance)
scaler = StandardScaler()
df['standardized_column'] = scaler.fit_transform(df[['numeric_column']])

# Normalization (scaling to a range of [0, 1])
normalizer = MinMaxScaler()
df['normalized_column'] = normalizer.fit_transform(df[['numeric_column']])
```


# Model Training and Evaluation
- Divide data into two groups to train the model.
	- Training Dataset
	- Testing Dataset
- Choose the model and train it the used data.
- Fine-tune the hyperparameters selects the best performing ML Models.
- The model is checked for the its stability with different sub-groups of data for cross-validation.
```
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, StandardScaler, MinMaxScaler

# Load your data
df = pd.read_csv('data.csv')

# Split data into training and testing sets
X = df.drop(columns=['target_column'])
y = df['target_column']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Hyperparameter tuning
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(estimator=RandomForestClassifier(random_state=42),
                           param_grid=param_grid,
                           cv=5,
                           scoring='accuracy',
                           n_jobs=-1)

# Fit the grid search to the data
grid_search.fit(X_train, y_train)

# Get the best model from the grid search
best_model = grid_search.best_estimator_

# Cross-validation to assess model generalization and robustness
cv_scores = cross_val_score(best_model, X_train, y_train, cv=5, scoring='accuracy')

print(f"Cross-validation scores: {cv_scores}")
print(f"Mean cross-validation score: {cv_scores.mean()}")
```



# Model Packaging
- Serialize the code into a more suitable format that can be stored or distributed to other system.
- **Pickle** is one of the conventional formats followed by **joblib** and **ONNX** formats based on user requirements.
- After optimizing model store it in file or database.
- GIT comes in handly for saving/altering/modifying the model files.
- Apply encryption

```
import joblib

joblib.dump(model, 'model.pkl')
```

- Put serialized model into a containers using docker.
```
# Docker code
FROM python:3.8-slim
COPY model.pkl /app/model.pkl
COPY app.py /app/app.py
WORKDIR /app
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

- AWS, Azure, GCP have the cloud services necessary for model deployment.
- AWS
```
aws ec2 run-instances \
    --image-id ami-0abcdef1234567890 \
    --count 1 \
    --instance-type t2.micro \
    --key-name MyKeyPair \
    --security-group-ids sg-0abcdef1234567890 \
    --subnet-id subnet-0abcdef1234567890
```
- Azure
```
az vm create \
  --resource-group myResourceGroup \
  --name myVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys
```


- GCP
```
gcloud compute instances create my-instance \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  --subnet=default \
  --network-tier=PREMIUM \
  --maintenance-policy=MIGRATE \
  --image=debian-9-stretch-v20200902 \
  --image-project=debian-cloud \
  --boot-disk-size=10GB \
  --boot-disk-type=pd-standard \
  --boot-disk-device-name=my-instance
```

# Deployment Pipeline
- Use Jenkins or Gitlab CI/CD to automate the stepof deploying the model.
- Use Jenkinsfile or YAML configuration in context of github actions.

```
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'python setup.py build'
      }
    }
    stage('Test') {
      steps {
        sh 'python -m unittest discover'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker build -t mymodel:latest .'
        sh 'docker run -d -p 5000:5000 mymodel:latest'
      }
    }
  }
}
```


# Model Testing
- Check model generalization capability with new data.
- Use metrics such as
	- Accuracy
	- Precision
	- Recall

```
# Import necessary libraries
from sklearn.metrics import accuracy_score, precision_score, recall_score

# Load your test data 
test_df = pd.read_csv('your_test_data.csv')  

X_test = test_df.drop(columns=['target_column'])
y_test = test_df['target_column']

# Predict outcomes on the test set
y_pred_test = best_model.predict(X_test)

# Evaluate performance metrics
test_accuracy = accuracy_score(y_test, y_pred_test)
test_precision = precision_score(y_test, y_pred_test, average='weighted')
test_recall = recall_score(y_test, y_pred_test, average='weighted')

# Print performance metrics
print(f"Test Set Accuracy: {test_accuracy}")
print(f"Test Set Precision: {test_precision}")
print(f"Test Set Recall: {test_recall}")
```

# Monitoring and Maintenance
- AWS Cloud Watch
- Azure Monitor 
- Google Cloud Monitoring.


# References
1. [Deploying ML Models: A step by step tutorial](https://www.kdnuggets.com/deploying-machine-learning-models-a-step-by-step-tutorial)
2. [Author - Jayita Gulati](https://www.linkedin.com/in/jayitagulati1998/)























