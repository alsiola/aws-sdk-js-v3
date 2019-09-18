import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}