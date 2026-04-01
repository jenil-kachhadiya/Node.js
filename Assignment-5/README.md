# How This Server Works

1. Server Creation
- http.createServer() creates a server.
- It runs a callback function every time a request comes.

2. Request & Response
req - contains user request (URL, method, etc.)
res - used to send response back to browser

3. Routing (Important Concept)
You check req.url using if-else
Based on URL → you send different HTML files
URL	File Returned
/	                home.html ![/ or /home](./Images/Screenshot%202026-04-01%20165902.png)
/about	            about.html ![/about](./Images/Screenshot%202026-04-01%20165926.png)
/contact	        contact.html ![/contact](./Images/Screenshot%202026-04-01%20170001.png)
anything else	    404.html ![If page not found](./Images/Screenshot%202026-04-01%20170431.png)

4. Sending Response
res.end(data) sends file to browser
Browser renders HTML