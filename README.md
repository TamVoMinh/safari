# Setup development enviroment
1. Prerequisite:
    * Installed [Nodejs LTS](https://nodejs.org/en/)
    * Installed [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

1. Clone source [https://github.com/TamVoMinh/safari.git](https://github.com/TamVoMinh/safari.git)
1. Install Dependencies 
        
        $ cd safari
        $ npm i

1. Download selenium driver [`chrome 75.0.3770.140`](https://sites.google.com/a/chromium.org/chromedriver/downloads)
1. Extract & save chromedriver as `safari/driver/chromedriver.exe`
1. Rename [varible.env](varible.env) to .env
1. Update environment variables in .env file

1. Run automation test
    
        $ yarn test

        $ yarn test scenario_test.js 

        $ yarn test scenario_test.js --verbose

	Example:

		$ yarn test src/animal-group_test.js --verbose

