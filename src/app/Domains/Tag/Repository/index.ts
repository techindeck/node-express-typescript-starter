import { TagModel } from '../Model/tag.model';
import { TagRepository } from './tag.repo';

export const TagRepo = new TagRepository(TagModel);
