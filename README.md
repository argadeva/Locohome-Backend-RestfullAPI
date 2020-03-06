## Introduction

LocoHome Backend RestFulAPI is a Home Booking App with restful api. The main features are:

- Login and Register with JWT.
- Forgot Password
- Email & SMS Verification
- Add Home & Room
- Booking Room List
- Update Profile
- Add Image
- User Logout

LocoHome Backend RestFulAPI is written in Node Js with Express framework, it uses MySQL as data storage back-end and has a simple but intuitive user interface.

## Flowchart

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBBe1VTRVJTfSAtLT4gQihSRUdJU1RFUilcbiAgICBBIC0tPiBDKChMT0dJTikpXG4gICAgQiAtLT4gQ1xuICAgIEMgLS0-IEUoU0VBUkNIIFJPT00pXG4gICAgRSAtLT4gRlxuICAgIEMgLS0-IEYoTElTVCBST09NKVxuICAgIEYgLS0-IEkoQ0hFQ0tPVVQgLyBQQVlNRU5UIEdBVEVXQVkpXG4gICAgSSAtLT4gS1xuICAgIEwgLS0-IEooKExPR09VVCkpXG4gICAgQyAtLT4gSyhISVNUT1JZKVxuICAgIEMgLS0-IEwoVVNFUlMpIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFJcbiAgICBBe1VTRVJTfSAtLT4gQihSRUdJU1RFUilcbiAgICBBIC0tPiBDKChMT0dJTikpXG4gICAgQiAtLT4gQ1xuICAgIEMgLS0-IEUoU0VBUkNIIFJPT00pXG4gICAgRSAtLT4gRlxuICAgIEMgLS0-IEYoTElTVCBST09NKVxuICAgIEYgLS0-IEkoQ0hFQ0tPVVQgLyBQQVlNRU5UIEdBVEVXQVkpXG4gICAgSSAtLT4gS1xuICAgIEwgLS0-IEooKExPR09VVCkpXG4gICAgQyAtLT4gSyhISVNUT1JZKVxuICAgIEMgLS0-IEwoVVNFUlMpIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0)

## How to Install

- Please make sure that you have : node.js installed ([https://nodejs.org/](https://nodejs.org/))
- Download or clone this file and then config & import MySQL database.
- You can use [POSTMAN](https://www.getpostman.com/) or anything else for simulate.
- The app loads the environment variable by reading `.env` file in the root directory of the project. Create `.env` file with environment variable in line with following:
  `SERVER_PORT = 1000 DB_HOST = "localhost" DB_USER = "your-user" DB_PASS = "your-password" DB_NAME = "your-database" PRIVATE_KEY = "your-private-key" URL = "http://localhost:1000/"`

## API Versioning

The first part of the URI path specifies the API version you wish to access in the format `v{version_number}`.

For example, version 1 of the API (most current) is accessible via:

```
https://localhost:1000/api/v1/
```
