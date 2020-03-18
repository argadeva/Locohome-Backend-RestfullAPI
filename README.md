<h1 align="center">
  <br>
  <img src="https://github.com/argadeva/djago-backend-restfulapi/raw/master/demo/logo.png" width="200">
  <br>
  LocoHome Backend RestFulAPI
  <br>
</h1>

<h4 align="center">Built with NodeJS using the ExpressJS Framework. ExpressJS is a web application framework for NodeJS. <a href="https://en.wikipedia.org/wiki/Express.js" target="_blank">More about Express</a></h4>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v12.14.1-success">
  <img src="https://img.shields.io/badge/Express.js-v.4.17.1-informational">
</p>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#flowchart">Flowchart</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#related-project ">Related Project</a> •
  <a href="#api-versioning">API Versioning</a> •
  <a href="#contributors">Contributors</a>
</p>

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

## How To Use

- Please make sure that you have : node.js installed ([https://nodejs.org/](https://nodejs.org/))
- Download or clone this file and then config & import MySQL database.
- You can use [POSTMAN](https://www.getpostman.com/) or anything else for simulate.
- The app loads the environment variable by reading `.env` file in the root directory of the project. Create `.env` file with environment variable in line with following:

  ```
  SERVER_PORT = 1000
  DB_HOST = "localhost"
  DB_USER = "your-user"
  DB_PASS = "your-password"
  DB_NAME = "your-database"
  PRIVATE_KEY = "your-private-key"
  URL = "http://localhost:1000/"
  ```

## Related Project

- [`LocoHome Mobile App`](https://github.com/argadeva/Locohome-Mobile)

## API Versioning

The first part of the URI path specifies the API version you wish to access in the format `v{version_number}`.

For example, version 1 of the API (most current) is accessible via:

```
https://localhost:1000/api/v1/
```

## Contributors

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/argadeva">
          <img width="100" style="border-radius: 50%" src="https://avatars1.githubusercontent.com/u/58824621?s=460&u=e3a58dc9b0941effb894115e55b1978ff3d99c4b&v=4" alt="Alam Raga Deva"><br/>
          <sub><b>Alam Raga Deva</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/handika97">
          <img width="100" style="border-radius: 50%" src="https://avatars1.githubusercontent.com/u/35553107?s=460&v=4" alt="Handika Yulma K"><br/>
          <sub><b>Handika Yulma K</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/ahmadsiddiq-lang">
          <img width="100" style="border-radius: 50%" src="https://avatars0.githubusercontent.com/u/60493382?s=460&v=4" alt="Handika Yulma K"><br/>
          <sub><b>Ahmad Siddiq</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/rohan1358">
          <img width="100" style="border-radius: 50%" src="https://avatars2.githubusercontent.com/u/28683986?s=460&u=ddf49273ced60719ac006078f0a9e7d52ae97fc1&v=4" alt="Rohan Adi Priyatna"><br/>
          <sub><b>Rohan Adi Priyatna</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/purkonuddin">
          <img width="100" style="border-radius: 50%" src="https://avatars0.githubusercontent.com/u/44079569?s=460&u=15d39d974729963b1c79d3709c0123d1e9cb8fe8&v=4" alt="Purkonuddin"><br/>
          <sub><b>Purkonuddin</b></sub>
        </a>
      </td>
    </tr>
  </table>
</center>
