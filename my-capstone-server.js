let http = require('http');
let express = require('express');
let app= express();
let cors = require("cors");
let converter = require("xml-js");
let request = require("request");
app.set('port', process.env.PORT||5000);
let server=http.createServer(app).listen(app.get('port'), ()=>{
    console.log('express 객체 이용하여 서버 생성 후 대기 중 !!');
});

app.use(cors());
//mysql 설정(컨넥션 풀을 이요하여 디비 접근)

let mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'111111',
    database:'reactdb1',
    debug:false
});

//특정 폴더에 rl로 ㄷ접근 위한 설정
let static= require('serve-static');
let path = require('path');

let pathName = path.join(__dirname, 'public');
console.log('pathName: ' + pathName)
app.use('/public', static(pathName)); // pathName을 'public 으로 접근
app.use(static(pathName));//'public' 폴더를 '/'접근 가능

//POST  방식으로 전달되는 데이터를 가져오기 위한 설정
//application /x-www-form-urlencoded (name=hong)
app.use(express.urlencoded());
//applicartion/json({'name':'hong'})
app.use(express.json());

//라우터 이용 사용자 요청 처리
let router = express.Router();
app.use('/', router);
let API_KEY = `Tb6v%2B1IRvKdFeie1ahQAYlTsX8WTdV8ug%2B4ZRIzVFAFO5goqgabRr3ihVlHjjO9IAbv2noI7VYDsvpAD0lyFtQ%3D%3D`;
let status_url = `
https://apis.data.go.kr/1741000/VolunteerParticipation/getVolunteerParticipation?ServiceKey=${API_KEY}`;
router.get("/status/api", (req,res)=>{
    request(
        {
            url: status_url,
            method: "GET"
        },
        (err, response, body)=>{
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
        }
    )
})
let volcollectionseoul_url = `
http://apis.data.go.kr/B460014/vmsdataview/getCenterList?serviceKey=${API_KEY}&numOfRows=25&pageNo=1&areaCode=0101`;
router.get("/centerList/api/seoul", (req,res)=>{
    // let areaCode = req.body.areaCode || req.query.areaCode;
        // let queryParams = '&' + encodeURIComponent('areaCode') + '=' + areaCode; /* */
    request(
        {
            url: volcollectionseoul_url ,
            method: "GET",
            // contentType: "application/json; charset=utf-8"
        },
        (err, response, body)=>{
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
            console.log("seoul");
            // console.log(xmlToJson);
        }
    )
})
let volcollectionbusan_url = `
http://apis.data.go.kr/B460014/vmsdataview/getCenterList?serviceKey=${API_KEY}&numOfRows=25&pageNo=1&areaCode=0102`;
router.get("/centerList/api/busan", (req,res)=>{
    // let areaCode = req.body.areaCode || req.query.areaCode;
        // let queryParams = '&' + encodeURIComponent('areaCode') + '=' + areaCode; /* */
    request(
        {
            url: volcollectionbusan_url ,
            method: "GET",
            // contentType: "application/json; charset=utf-8"
        },
        (err, response, body)=>{
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
            console.log("busan");

            // console.log(xmlToJson);
        }
    )
})
let volcollectiondaegu_url = `
http://apis.data.go.kr/B460014/vmsdataview/getCenterList?serviceKey=${API_KEY}&numOfRows=25&pageNo=1&areaCode=0103`;
router.get("/centerList/api/daegu", (req,res)=>{
    // let areaCode = req.body.areaCode || req.query.areaCode;
        // let queryParams = '&' + encodeURIComponent('areaCode') + '=' + areaCode; /* */
    request(
        {
            url: volcollectiondaegu_url ,
            method: "GET",
            // contentType: "application/json; charset=utf-8"
        },
        (err, response, body)=>{
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
            console.log("daegu");

            // console.log(xmlToJson);
        }
    )
})
let volcollectiongyeonggi_url = `
http://apis.data.go.kr/B460014/vmsdataview/getCenterList?serviceKey=${API_KEY}&numOfRows=25&pageNo=1&areaCode=0108`;
router.get("/centerList/api/gyeonggi", (req,res)=>{
    // let areaCode = req.body.areaCode || req.query.areaCode;
        // let queryParams = '&' + encodeURIComponent('areaCode') + '=' + areaCode; /* */
    request(
        {
            url: volcollectiongyeonggi_url ,
            method: "GET",
            // contentType: "application/json; charset=utf-8"
        },
        (err, response, body)=>{
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
            console.log("gyeonggi");

            // console.log(xmlToJson);
        }
    )
})
let volcollectionjeju_url = `
http://apis.data.go.kr/B460014/vmsdataview/getCenterList?serviceKey=${API_KEY}&numOfRows=25&pageNo=1&areaCode=0116`;
router.get("/centerList/api/jeju", (req,res)=>{
    // let areaCode = req.body.areaCode || req.query.areaCode;
        // let queryParams = '&' + encodeURIComponent('areaCode') + '=' + areaCode; /* */
    request(
        {
            url: volcollectionjeju_url ,
            method: "GET",
            // contentType: "application/json; charset=utf-8"
        },
        (err, response, body)=>{
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson);
            console.log("jeju");

            // console.log(xmlToJson);
        }
    )
})
//리엑트 염동하면서 요청 url이 오면 여기사 처리

// 전체 데이터를 읽어서 클라이언트에 전달하는 요청에 대한 처리
router.route('/process/login/:name').all((req,res)=>{
    console.log('/process/login->');
    let id = req.body.id || req.query.id;
    let pw = req.body.pw || req.query.pw;
    let name = req.params.name;
    console.log('(param): id:'+id+',pw: '+pw+',name:' + name);
    // pool.getConnection((err, conn)=>{
    //     if(err){
    //         console.log('getConnection() 에러 발생-->'+err);
    //         if(conn){
    //             conn.release();

    //         }
    //         return;
    //     }
        
    //     let params = [id, pw];
    //     let sql= 'select * from users where id =? and pw=?';
    //     conn.query(sql, params, (err, results)=>{
    //         conn.release();
    //         if(err){
    //             console.log('query() 에러발생-->'+err);
    //             return;
    //         }
    //         res.send(results);
    //     })
    // })
})

//데이터 저장에 요청 처리
const multer = require('multer');
const { release } = require('os');
//클라이언트로 부터 전달되는 파일 데이터를 'upload' 폴더에 저장하기 위해서 설정을 함
const upload = multer({dest:'./upload'});

router.route('/process/login').all((req, res)=>{
    console.log('process/login-->');
    let userid = req.body.userid || req.query.userid;
    let pw = req.body.pw || req.query.pw;
    let name = req.body.name || req.query.name;

    console.log(`userid: ${userid}, pw: ${pw}`);
    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 발생-->'+err);
            if(conn)
                conn.release();
            return;
        }
        let params = [userid, pw];
        let sql = 'SELECT * FROM users WHERE userid = ? and pw = ?';
        conn.query(sql, params, (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러발생-->'+err);
                return;
            }
            else{
                if(results){
                    res.send(results);
                }
                else{
                    res.send({ message: "Wrong userid/password combination!"});
                }
            }
        })
    })

})
router.route('/process/signup').all((req,res)=>{
    console.log('process/signup -->');
    let userid = req.body.userid;
    let pw = req.body.pw;
    let name = req.body.name;
    let birth = req.body.birth;
    let addr = req.body.addr;
    let addrdetail = req.body.addrdetail;
    let object = req.body.object;
    
    console.log(`userid: ${userid}, pw: ${pw}, name: ${name},
                birth:${birth}, addr:${addr}, addrdetail:${addrdetail}, object:${object}`);

    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 발생-->'+err);
            if(conn)
                conn.release();
            return;
        }
        console.log('getConnection() 성공');
        let params = [null, userid, pw, name, birth, addr, addrdetail, object];
        let sql = "insert into users values(?,?,?,?,?,?,?,?)";
        conn.query(sql, params, (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러발생-->'+err);
                
                return;
            }
            res.send(results);
        })
    })
})
//데이터 리스트 출력(kakaomap)
router.route('/process/volunteersList').all((req,res)=>{
    console.log('process/volunteersList -->');

    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 발생-->'+err);
            if(conn)
                conn.release();
            return;
        }
        let sql = 'select * from volunteers where isMatched = 0';
        conn.query(sql, (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러발생-->'+err);
                return;
            }
            res.send(results);
        })
    })

})

//volunteer 인포 조회
router.route(`/process/volunteer/:userid`).all((req, res)=>{
    console.log('process/volunteer/:userid -->');
    let userid = req.params.userid;
    // let id = req.body.id||req.query.id;
    console.log(userid);
    pool.getConnection((err, conn)=>{
        if(err){
            console.log('getConnection() 에러 발생->'+err);
            if(conn){
                conn.release();
            }
            return;
        }
        let param = [userid];
        console.log(param);
        let sql = 'select * from volunteers where volunteerid = ?';
        conn.query(sql, param, (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러발생-->'+ err);
                return;
            }
            res.send(results);
            console.log(results);

        })
    })
    
})
//데이터 조회
// router.route(`/process/home/:userid`).all((req, res)=>{
//     console.log('process/home/:userid -->');
//     let userid = req.params.userid;
//     // let id = req.body.id||req.query.id;
//     pool.getConnection((err, conn)=>{
//         if(err){
//             console.log('getConnection() 에러 발생->'+err);
//             if(conn){
//                 conn.release();
//             }
//             return;
//         }
//         let param = [userid];
//         let sql = 'select * from users where userid = ?';
//         conn.query(sql,param, (err, results)=>{
//             conn.release();
//             if(err){
//                 console.log('query() 에러발생-->'+ err);
//                 return;
//             }
//             res.send(results);
//             console.log(results);

//         })
//     })
    
// })
//데이터 수정 처리
router.route('/process/volMatching').all((req,res)=>{
    console.log('/process/volMatching-->');
    let id = req.body.id;
    console.log('id: '+id);

    // let isMatched = req.body.isMatched||req.query.isMatched;
    // console.log('isMatched' +isMatched);
    pool.getConnection((err, conn)=>{
        if(err){
            console.log('getConnection() 에러 발생');
            if(conn)
                conn.release();
            return;
        }
        let params = [id];
        let sql = 'update volunteers set isMatched = 1 where id=?';
        conn.query(sql, params, (err, results)=>{
            conn.release();
            if(err){
                console.log('query()에 에러 발생-->'+ err);
                return;
            }
            res.send(results);
        })

})
})
// http://localhost:3000/process/volMatching
router.route('process/volMatching:userid').all((req,res)=>{
    console.log('process/volMatching:userid-->');
    
    
    // console.log(volunteerid);
    // console.log(req.params.userid);
    let disableid = req.params.userid;
    console.log(disableid);
    let volunteerid = req.body.id || req.query.id;
    let addr = req.body.addr|| req.query.addr;
    let duration = req.body.duration ||  req.query.duration;
    
    console.log(`volunteerid: ${volunteerid}, disableid: ${disableid}, addr:${addr}, duration: ${duration}`);

    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 발생-->'+err);
            if(conn)
                conn.release();
            return;
        }
        console.log('getConnection() 성공');
        let params = [null, disableid, volunteerid, addr, duration,];
        console.log(params);
        let sql = "insert into matching values(?,?,?,?,?)";
        conn.query(sql, params, (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러발생-->'+err);
                
                return;
            }
            res.send(results);
        })
    })
})

// router.route('/process/matchingCancel').all((req,res)=>{
//     console.log('/process/matchingCancel-->');
//     let id = req.body.id;
//     console.log('id: '+id);

//     // let isMatched = req.body.isMatched||req.query.isMatched;
//     // console.log('isMatched' +isMatched);
//     pool.getConnection((err, conn)=>{
//         if(err){
//             console.log('getConnection() 에러 발생');
//             if(conn)
//                 conn.release();
//             return;
//         }
//         let params = [id];
//         let sql = 'update volunteers set isMatched = 0 where id=?';
//         conn.query(sql, params, (err, results)=>{
//             conn.release();
//             if(err){
//                 console.log('query()에 에러 발생-->'+ err);
//                 return;
//             }
//             res.send(results);
//         })

// })
// })
router.route('/process/volunteersUpload/:userid').post(upload.single('file'),(req,res)=>{
    console.log('process/volunteersUpload/:userid -->');
    
    let image = '/images/'+ req.file.originalname;
    console.log(req.file);
    // let volunteerid = req.params.userid;
    // console.log(volunteerid);
    // console.log(req.params.userid);
    let volunteerid = req.body.volunteerid;
    console.log(volunteerid);
    let name = req.body.name;
    let age = req.body.age;
    let addr = req.body.addr;
    let lat = req.body.lat;
    let lng = req.body.lng;
    let duration = req.body.duration;
    
    console.log(`volunteerid: ${volunteerid}, name: ${name}, image: ${image},
                age:${age}, addr:${addr}, lat:${lat}, lng:${lng}, duration: ${duration}`);

    pool.getConnection((err,conn)=>{
        if(err){
            console.log('getConnection() 에러 발생-->'+err);
            if(conn)
                conn.release();
            return;
        }
        console.log('getConnection() 성공');
        let params = [null, volunteerid, name, image, age, addr, lat, lng, duration, 0];
        console.log(params);
        let sql = "insert into volunteers values(?,?,?,?,?,?,?,?,?,?)";
        conn.query(sql, params, (err, results)=>{
            conn.release();
            if(err){
                console.log('query() 에러발생-->'+err);
                
                return;
            }
            res.send(results);
        })
    })
})



// })
// app.all('*', function(req,res){
//     console.log('에러 처리...');
//     res.status(404).send('요청한 페이지는 찾을 수 없다..체크하세요');
// })







