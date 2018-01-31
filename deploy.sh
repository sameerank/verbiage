# https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04
git pull origin master
source verbiageenv/bin/activate
pip install -r requirements.txt
./manage.py collectstatic --noinput
./manage.py migrate
sudo systemctl restart nginx
sudo systemctl daemon-reload
sudo systemctl restart gunicorn
deactivate