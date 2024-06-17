import * as moduleService from "../services/moduleService.js";
import { prepareResponse , logInfo , logError , extractAndValidateApiKey } from "../../utils/index.js";


const getMethod = async (req, res) => {

    const apiResponse = extractAndValidateApiKey(req);
    if ( apiResponse !== null) {
        res.status(401).send(apiResponse);
    }

    try {
        const requestObject = {
            value1: req.body.value1 , 
            value2: req.body.value2 
        }

        const result = await moduleService.getMethod(requestObject);

        logInfo("success message for log", result)
        res.status(200).send(prepareResponse("SUCCESS" , "success message" , result ))
        
        
         

  } catch (error) {
        logError("Failed message", error.message)
        res.status(500).send(prepareResponse("FAILURE" , "failure message"))
    }
} 


export { getMethod };