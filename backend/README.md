# Python Cloud Function Backend

## Deploy Instructions

```bash
gcloud functions deploy greet_user \
  --runtime python310 \
  --trigger-http \
  --region us-central1 \
  --allow-unauthenticated
