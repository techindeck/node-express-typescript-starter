import { CaseReadTag } from "./read.case";
import { CaseFindTag } from "./find.case";
import { CaseCreateTag } from "./create.case";
import { CaseUpdateTag } from "./update.case";
import { CaseDeleteTag } from "./delete.case";

const TagController = {
  CaseRead: new CaseReadTag(),
  CaseFind: new CaseFindTag(),
  CaseCreate: new CaseCreateTag(),
  CaseUpdate: new CaseUpdateTag(),
  CaseDelete: new CaseDeleteTag(),
};

export default TagController;
