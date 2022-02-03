let CognitoRegion = 'xxx';
let CognitoUserPool = 'yyy';
let CognitoUserPoolClient = 'zzz';

let CognitoDomainPrefix = 'ddd';

let amplifyConfig = {
    Auth: {
        region: CognitoRegion,
        userPoolId: CognitoUserPool,
        userPoolWebClientId : CognitoUserPoolClient,
        oauth: {
            domain: `${CognitoDomainPrefix}.auth.${CognitoRegion}.amazoncognito.com`,
            scope: ['openid'],
            redirectSignIn: 'http://localhost:3000',
            redirectSignOut: 'http://localhost:3000',
            responseType: 'code'
        }
    }
};