Corruption REST documentation:

Endpoints:

GET     /api/person - Return a list of all persons in the database matching the search parameters.
POST    /api/person - Create a new person or update an existing.
PUT     /api/person - Create a new person.
DELETE  /api/person - Delete a person.

Endpoint Details:

GET     /api/person - Return a list of all persons in the database matching the search parameters.
  Example: http://localhost/api/person?fn=test&ln=test&dob=19881129
  Parameters:
    fn  - First name. Required. Case insensitive. The person's first name must include the exact pattern.
    ln  - Last name. Required. Case insensitive. The person's last name must include the exact pattern.
    dob - Date of Birth. Required. yyyyMMdd
POST    /api/person - Create a new person or update an existing.
  Example: http://localhost/api/person?{fn:"test",ln:"test",dob:"19881129"}
  Parameters:
    fn  - First name. Required. Case insensitive. The person's first name must include the exact pattern.
    ln  - Last name. Required. Case insensitive. The person's last name must include the exact pattern.
    dob - Date of Birth. Required. yyyyMMdd
PUT     /api/person - Create a new person.
  Example: http://localhost/api/person?{fn:"test",ln:"test",dob:"19881129"}
  Parameters:
    fn  - First name. Required. Case insensitive. The person's first name must include the exact pattern.
    ln  - Last name. Required. Case insensitive. The person's last name must include the exact pattern.
    dob - Date of Birth. Required. yyyyMMdd
DELETE  /api/person - Delete a person.
  Example: http://localhost/api/person?{fn:"test",ln:"test",dob:"19881129"}
  Parameters:
    fn  - First name. Required. Case insensitive. The person's first name must include the exact pattern.
    ln  - Last name. Required. Case insensitive. The person's last name must include the exact pattern.
    dob - Date of Birth. Required. yyyyMMdd
