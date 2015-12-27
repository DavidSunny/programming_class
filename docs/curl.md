 ## curl

 - curl is a tool to transfer data from or to a server,
 using one of the supported protocols
 (DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3,
 POP3S, RTMP, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET and TFTP).

 - The command is designed to work without user interaction.

 - curl offers a busload of useful tricks like proxy support, user
 authentication, FTP upload, HTTP post, SSL connections, cookies,
 file transfer resume, Metalink, and more. As you will see below,
 the number of features will make your head spin!

 - curl is powered by libcurl for all transfer-related features. See
 libcurl(3) for details.


 curl -i http://localhost:3000
 (-i, --include)

(HTTP) Include the HTTP-header in the output.
The HTTP-header includes things like server-name, date of the document,
HTTP-version and more...