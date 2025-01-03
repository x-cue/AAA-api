Prerequisites
A domain name pointing to your server.
Nginx installed and running.
Access to your server via SSH.
Steps
Update Package List

bash
Copy code
sudo yum update
Install Certbot Install Certbot using yum:

bash
Copy code
sudo yum install certbot
Obtain SSL Certificate Use Certbot to obtain an SSL certificate with the certonly option:

bash
Copy code
sudo certbot certonly --nginx
Follow the prompts to enter your email and agree to the terms of service.
Certbot will verify your domain and obtain the certificate.
Locate Your Certificates The certificates are typically stored in:

bash
Copy code
/etc/letsencrypt/live/yourdomain.com/
The important files are:

fullchain.pem (certificate)
privkey.pem (private key)
Configure Nginx Edit your Nginx configuration to use the obtained certificates. Update your server block:

nginx
Copy code
server {
    listen 443 ssl;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Other configuration...
}
Test Nginx Configuration Test your Nginx configuration:

bash
Copy code
sudo nginx -t
Reload Nginx If the test is successful, reload Nginx:

bash
Copy code
sudo systemctl reload nginx
Set Up Auto-Renewal To set up auto-renewal, add a cron job. Open the crontab editor:

bash
Copy code
sudo crontab -e
Add the following line to check for renewal twice daily:

bash
Copy code
0 */12 * * * certbot renew --quiet
Done!
Your SSL certificate is now installed, and Nginx is configured to use it. You can check your site by visiting https://yourdomain.com.
