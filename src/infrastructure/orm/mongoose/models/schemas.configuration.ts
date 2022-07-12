export const MONGO_SCHEMA_OPTIONS = {
  versionKey: false,
  timestamps: true,
  toJSON: {
    versionKey: false,
    transform: (doc: unknown, ret: Record<string, unknown>, options: unknown) => {
      if (ret._id) {
        ret.id = ret._id
        delete ret._id
      }
      return ret
    }
  },
  toObject: {
    versionKey: false,
    transform: (doc: unknown, ret: Record<string, unknown>, options: unknown) => {
      if (ret._id) {
        ret.id = ret._id
        delete ret._id
      }
      return ret
    }
  }
}
