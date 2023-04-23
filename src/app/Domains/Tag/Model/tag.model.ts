import mongoose, { Schema, InferSchemaType } from 'mongoose';

// Schema
const TagSchema = new Schema(
    {
        ref_id: {
            type: Number,
            primary_key: true,
            required: false,
            index: true,
            auto_increment: true
        },
        display_name: { type: String, required: true },
        name: { type: String, required: true, unique: true, index: true },
        description: { type: String, required: false },
        is_public: { type: Boolean, required: true, default: true },
        user_id: { type: Number, required: true },
        is_deleted: { type: Boolean, required: false, default: false }
    },
    { timestamps: true }
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Tag = InferSchemaType<typeof TagSchema>;

// Auto-incrementing ref_id
TagSchema.pre('save', async function (next) {
    const doc = this as Tag;
    const last = await TagModel.findOne({}, {}, { sort: { ref_id: -1 } });
    doc.ref_id = last ? last.ref_id + 1 : 1;
    next();
});

// FieldAutoIncreaser.autoIncrementingFieldPlugin(TagSchema, TagModel, 'ref_id');

// `TagModel` will have `name: string`, etc.
const TagModel = mongoose.model('Tag', TagSchema);

export { TagModel };
