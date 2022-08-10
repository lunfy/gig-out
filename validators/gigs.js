const Joi = require('joi')
    .extend(require('@joi/date'))

const validators = {

    newGigValidator: Joi.object({
        title: Joi.string().required(),
        type: Joi.string().required(),
        workarea: Joi.string().required(),
        workdate: Joi.date().format('YYYY-MM-DD').utc().required(),
        jd: Joi.string().required(),
        cash: Joi.string(),
        cashval: Joi.any(),
        paynow: Joi.string(),
        paynowval: Joi.any(),
        banktransfer: Joi.string(),
        banktransferval: Joi.any(),
        amount: Joi.string().required()
    }).or('cash','paynow','banktransfer')
}

module.exports = validators