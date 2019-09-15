import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Currency = () => {
    const [list, setList] = useState(0);

    //var currencyList = ["Canadian Dollar", "US Dollar", "Great Britain Pound"];
    //var test = "US Dollar";
    let temp;

    var session_url = 'https://xecdapi.xe.com/v1/convert_from.json/?from=CAD&to=USD,INR,TTD,CNH&amount=1';
    var uname = 'universityoftoronto434826383';
    var pass = 'jvpl767na5rbfnpkhu1e77c8p2'
/*    var tester = axios.get(session_url, {
        auth: {
            username: uname,
            password: pass
        }
    }).then((data) => {
       // useEffect(() => {
            setList(data.data.to);
      //  }, []);
    });*/

    useEffect(() => {
        setList(axios.get(session_url, {
            auth: {
                username: uname,
                password: pass
            }
        }).then((data) => {
            return data.data.to;
          
        }))
    }, []);
    //console.log(list);
    return ((<div class = 'money'>
        <ul>
            <li>1 CAD = 0.75 USD</li>
            <li>1 CAD = 5.09 TTD</li>
            <li>1 CAD = 53.48 INR</li>
            <li>1 CAD = 5.30 CNH</li>
        </ul>
    </div>));
   
};

export default Currency;




