const Joi = require('joi')

const note = Joi.string().min(15).max(150)
const emotion = Joi.string()
const color = Joi.string()

const createDailySchema = Joi.object({
    note: note.required(),
    emotion: emotion.required(),
    color: color.optional()
})

module.exports = {
    createDailySchema
}
