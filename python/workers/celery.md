# Celery
- Celery workers are background python processes that continuously monitor a message broker like Redis or RabbitMQ and execute tasks asynchronously.
- They prevent heavy or slow operations from blocking your main application (such as django web server)  and ruining user experience.

--- 
1. Sending emails, SMS and PUSH Notifications
2. Generating Heavy Files and Reports
3. Scheduled and Periodic Tasks
4. Integrating with Slow Third Party APIs
5. Data Ingestion and Bulk Processing

---
- Third party API calls with Celery workers in a Python/Django application.
- async notifications, third party API calls with automatic retries and periodic tasks.
- Asynchronous Email / Notification Task
```
from celery import shared_task
import time

@shared_task(bind=True)
def send_welcome_email(self, user_email, username):
    print(f"Task {self.request.id} Preparing email for {user_email}")
    time.sleep(2)
    print(f"Success! Welcome email sent to {username} <{user_email}>")
    return f"Email delivered to {user_email}"
```
- Triggering from django view
- 
```
from django.http import HttpResponse
from .tasks import send_welcome_email

def register_view(request)
    user_email = "test@xyz.com"
    username = "Test"

    send_welcome_email.delay(user_email, username)
    return HttpResponse("Registration is complete")
```

---
# Third Party API Integration with Automatic Retries
- External APIs can experience temporary downtime or network timeouts.
- Celery allows you to automatically retry failed tasks using exponential backoffs.

```
from celery import shared_task
import requests
from requests.exceptions import RequestException

@shared_task(
    bind=True,
    autoretry_for=(RequestException),
    retry_kwargs={'max_retries': 3},
    retry_backoff=True,
    retry_backoff_max=60,
    retry_jitter=True
)

def sync_user_to_crm(self, user_data):
    url="https://api.crm-provider.com/v1/contacts"
    response = requests.post(url, json-user_data, timeout=5)
    response.raise_for_status()
    return f"synced user successfully"
```

---

