# Setup development enviroment
1. Prerequisite:
    * Installed [Nodejs LTS](https://nodejs.org/en/)
    * Installed [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

1. Clone source [https://github.com/TamVoMinh/safari.git](https://github.com/TamVoMinh/safari.git)
1. Install Dependencies 
        
        $ cd safari
        $ npm i

1. Download selenium driver [`chrome 75.0.3770.140`](https://sites.google.com/a/chromium.org/chromedriver/downloads)
1. Extract & save chromedriver as `safari/dirver/chromedriver.exe`

1. Run automation test
    
        $ yarn test

        $ yarn test scenario_test.js 

        $ yarn test scenario_test.js --verbose

	Example:

		$ yarn test src/animal-group_test.js --verbose

**Run automation on enviroment which is not window (Mac or Linux)**

    * Run selenium webdriver

            $ cd path/to/chromedriver-folder
            $ ./chromdirver --port=4444 --url-base=wd/hub

    * Run automation scenario
   
            $ npx codeceptjs run src/path/to/scenario-name_test.js

        Example:

            $ npx codeceptjs run src/animal-group_test.js --verbose
