'use strict';

class Service {
    constructor(model) {
        this.model = model;
    }


    async createDocument(item) {
        return this.model.create(item).lean().exec();
    }

    async getAllDocuments() {
        return this.model.find().lean().exec();
    }

   /* async getItemById(id) {
        try {
            const item = await this.model.findOne({id: id}).exec();
            if (!item) {
                return new Error(`Item id = ${id} not found`);
            }
            return item;
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB connection: cant read data.\n ${err.message} `;
        }
    }


    async updateItemById(id, patchSource) {
        try {
            const itemTarget = await this.getItemById(id);
            if (itemTarget instanceof Error) {
                return itemTarget;
            }
            const errors = [];
            Object.keys(patchSource).forEach((patchKey) => {
                if (!(patchKey in itemTarget)) {
                    errors.push(new Error(`${patchKey}`));
                }
            })
            if (errors.length > 0) {
                return errors;
            }
            return await this.model.findOneAndUpdate({id: id}, patchSource, {new: true});
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB IO: ${err.message} `;
        }
    }

    async deleteItemById(id) {
        try {
            const deletedItem = await this.getItemById(id);
            if (!deletedItem) {
                return new Error(`Item id = ${id} not found`);
            }
            await this.model.deleteOne({id});
            return deletedItem;
        } catch (err) {
            // TODO log it .. and rethrow to the controller
            throw `Error DB IO.\n ${err.message} `;
        }
    }*/

}

module.exports = Service;
