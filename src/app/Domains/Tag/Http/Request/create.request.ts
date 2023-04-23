import Joi from "joi";

export const TagCreateRequest = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
});
