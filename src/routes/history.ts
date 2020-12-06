import { createBrowserHistory } from "history";

import { BASE_PATH } from "./consts";

const history = createBrowserHistory({ basename: BASE_PATH });

export { history };
