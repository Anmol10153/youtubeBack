# Http & Https
- both are same only protocol are different.
- http me data clear text me jaata h. 
- https me ek layer rehti h jo data encrypt krdeti h.
  in between data readable na ho.

- How to transfer a data
  1. as we have lots of variable and data, so here we used DSA and OS knowledge.

1. URL : uniform resource locator 
2. URI : uniform resource identity
3. URN : uniform resource name

- we just need address from where the resource is available.

# what are http headers : 
  1. http headers k sath meta data send krna pdta h. 
  2. metadata is in key:value pair. 
  headers are available on req and response as well.

  headers are metaData.

# use of headers : 
  1. caching
  2. authentication
  3. state management (guest, logged in user, cartData)

  4. x-prefix is used before 2012 in the headers as a prefix like x-cache but now x-depricated.

# category of headers: 
1. request header - when we take data from client
2. response header - when we get data from server. should be in standardise 
3. representation headers - data kis encoding me h ya kis compression me h. 
  - in mobile app development where data comes in compressed format than we need to extract the data first.
  - in zerodha and payzap we use graphical chart so here we get data in compressed form because network layer ki ek limit h ki data itna hi send ho skta h uske baad lagging hone lgti h.
4. payload headers - contains data 

# standardise headers: 
  1. accept : application/json (kis type ka data accept krunga, it is available on server basically, we can accept text/html data as well)
  2. user-agent : konsi application se request aayi h. POSTMAN se ya BROWSER se, if browser then what engine does it support and which OS is used. 
  3. authorization : bearer ________ this are jwt token. used in frontend mostly
  4. content-type : images bhej rahe ho ya pdf bhej rahe ho ye sb handle hota h ki kya content aaraha h.
  5. cookies : key:value pairs h, contain unique code, login time set etc.
  6. cache-control : how much time does data should exist in the network. (setting up the expire time of data)

# Cors headers: 
  1. twitter pr scrapping allowed nahi h. 
   as they set up the,
    - access-controll-allow-origin
    - access-control-allow-credentials
    - access-control-allow-method ( get allowed h post allowed nahi h )

# https methods: 
  1. GET: used to retrive the data or resource.
  2. HEAD: no body message available, only headers we get. it is used when we need user-agent and cache-control.
  3. OPTIONS: with this we can ask server ki particular endpoint pr kon kon se operations k options available h. like post patch ya get available h ya nahi. 
  4. TRACE: is used for debugging. looback test. jo bhi request bheji h waha se response dedeta h. sometimes bohot sari proxy k piche resource hota h. so just to get to know ki konsi proxy se hokr request jaa rahi h & konsi proxy se hokr request aarahi, we use this method. (used when the response takes lots of time.)
  5. DELETE: remove the resource.
  6. PUT: replace the resource completely.
  7. POST: interact with the resource. add the resource
  8. PATCH: particular part of the resource has been changed 

# status codes knowledge: commonly used. 
 - 100 continue
 - 102 processing
 - 200 ok
 - 201 created
 - 202 accepted
 - 307 temperory redirect
 - 308 permanent redirect
 - 400 bad request
 - 401 unauthorised
 - 402 payment required
 - 404 not found
 - 500 internal server error
 - 504 gateway time out









