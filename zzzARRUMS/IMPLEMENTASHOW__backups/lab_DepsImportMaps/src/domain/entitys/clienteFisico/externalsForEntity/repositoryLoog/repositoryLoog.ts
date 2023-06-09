import { LoggPersonModel, LoggUserType } from "@depsExternals";

const logUserRepositoryProduction: LoggUserType = {
  items: [],

  create(props: LoggPersonModel) {
    if (props) {
      this?.items?.push(props)!;
      return props;
    } else {
      return false;
    }
  },

  list() {
    return this?.items!;
  },
};

export { logUserRepositoryProduction };
