The following is a list of Hypertext Transfer Protocol (HTTP) response status codes.
 This includes codes from IETF internet standards as well as other IETF RFCs,
 other specifications and some additional commonly used codes.
 The first digit of the status code specifies one of five classes of response;
 the bare minimum for an HTTP client is that it recognises these five classes.
 The phrases used are the standard examples, but any human-readable alternative can be provided.
  Unless otherwise stated, the status code is part of the HTTP/1.1 standard (RFC 7231).[1]
The Internet Assigned Numbers Authority (IANA) maintains the official registry of HTTP status codes.[2]

2xx Success[edit]
This class of status codes indicates the action requested by the client was received, understood, accepted and processed successfully.[9]

`200` OK

Standard response for successful HTTP requests.
The actual response will depend on the request method used.

In a GET request, the response will contain an entity corresponding to the requested resource.
In a POST request, the response will contain an entity describing or containing the result of the action.[10]

3xx Redirection[edit]
This class of status code indicates the client must take additional action to complete the request.
Many of these status codes are used in URL redirection.[20]
A user agent may carry out the additional action with no user interaction
only if the method used in the second request is GET or HEAD.
A user agent should not automatically redirect a request more than five times[citation needed],
since such redirections usually indicate an infinite loop.[21]

4xx Client Error[edit]

A 404 error on the German language Wikipedia.

404 error on German Wikipedia

The 4xx class of status code is intended for cases in which the client seems to have erred.
Except when responding to a HEAD request, the server should include an entity
containing an explanation of the error situation, and whether it is a temporary
or permanent condition. These status codes are applicable to any request method.
User agents should display any included entity to the user.[35]

5xx Server Error[edit]
The server failed to fulfill an apparently valid request.[75]

Response status codes beginning with the digit "5" indicate cases in which the
server is aware that it has encountered an error or is otherwise incapable of
performing the request. Except when responding to a HEAD request, the server
should include an entity containing an explanation of the error situation, and
indicate whether it is a temporary or permanent condition. Likewise, user agents
should display any included entity to the user. These response codes are
applicable to any request method.[76]

500 Internal Server Error
A generic error message, given when an unexpected condition was encountered
and no more specific message is suitable.[77]