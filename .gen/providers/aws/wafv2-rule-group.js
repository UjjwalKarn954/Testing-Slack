"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Wafv2RuleGroup = void 0;
var cdktf = require("cdktf");
function wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform)(struct.insertHeader)
    };
}
function wafv2RuleGroupRuleActionAllowToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_request_handling: cdktf.listMapper(wafv2RuleGroupRuleActionAllowCustomRequestHandlingToTerraform)(struct.customRequestHandling)
    };
}
function wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function wafv2RuleGroupRuleActionBlockCustomResponseToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        response_code: cdktf.numberToTerraform(struct.responseCode),
        response_header: cdktf.listMapper(wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderToTerraform)(struct.responseHeader)
    };
}
function wafv2RuleGroupRuleActionBlockToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_response: cdktf.listMapper(wafv2RuleGroupRuleActionBlockCustomResponseToTerraform)(struct.customResponse)
    };
}
function wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        insert_header: cdktf.listMapper(wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderToTerraform)(struct.insertHeader)
    };
}
function wafv2RuleGroupRuleActionCountToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        custom_request_handling: cdktf.listMapper(wafv2RuleGroupRuleActionCountCustomRequestHandlingToTerraform)(struct.customRequestHandling)
    };
}
function wafv2RuleGroupRuleActionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        allow: cdktf.listMapper(wafv2RuleGroupRuleActionAllowToTerraform)(struct.allow),
        block: cdktf.listMapper(wafv2RuleGroupRuleActionBlockToTerraform)(struct.block),
        count: cdktf.listMapper(wafv2RuleGroupRuleActionCountToTerraform)(struct.count)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementToTerraform)(struct.andStatement),
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementToTerraform)(struct.notStatement),
        or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementToTerraform)(struct.orStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform)(struct.andStatement),
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform)(struct.notStatement),
        or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementToTerraform)(struct.orStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform)(struct.forwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform)(struct.ipSetForwardedIpConfig)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementToTerraform)(struct.andStatement),
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementToTerraform)(struct.notStatement),
        or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementToTerraform)(struct.orStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementToTerraform)(struct.statement)
    };
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name)
    };
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {};
}
function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct.allQueryArguments),
        body: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct.body),
        method: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct.method),
        query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct.queryString),
        single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct.singleHeader),
        single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct.singleQueryArgument),
        uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct.uriPath)
    };
}
function wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type)
    };
}
function wafv2RuleGroupRuleStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform)(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation)
    };
}
function wafv2RuleGroupRuleStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementToTerraform)(struct.andStatement),
        byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementToTerraform)(struct.byteMatchStatement),
        geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform)(struct.geoMatchStatement),
        ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform)(struct.ipSetReferenceStatement),
        not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementToTerraform)(struct.notStatement),
        or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementToTerraform)(struct.orStatement),
        regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform)(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform)(struct.sizeConstraintStatement),
        sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform)(struct.sqliMatchStatement),
        xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementToTerraform)(struct.xssMatchStatement)
    };
}
function wafv2RuleGroupRuleVisibilityConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct.cloudwatchMetricsEnabled),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        sampled_requests_enabled: cdktf.booleanToTerraform(struct.sampledRequestsEnabled)
    };
}
function wafv2RuleGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
        action: cdktf.listMapper(wafv2RuleGroupRuleActionToTerraform)(struct.action),
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementToTerraform)(struct.statement),
        visibility_config: cdktf.listMapper(wafv2RuleGroupRuleVisibilityConfigToTerraform)(struct.visibilityConfig)
    };
}
function wafv2RuleGroupVisibilityConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct.cloudwatchMetricsEnabled),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        sampled_requests_enabled: cdktf.booleanToTerraform(struct.sampledRequestsEnabled)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group}
*/
var Wafv2RuleGroup = /** @class */ (function (_super) {
    __extends(Wafv2RuleGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html aws_wafv2_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RuleGroupConfig
    */
    function Wafv2RuleGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_rule_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._capacity = config.capacity;
        _this._description = config.description;
        _this._name = config.name;
        _this._scope = config.scope;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._rule = config.rule;
        _this._visibilityConfig = config.visibilityConfig;
        return _this;
    }
    Object.defineProperty(Wafv2RuleGroup.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "capacity", {
        get: function () {
            return this.getNumberAttribute('capacity');
        },
        set: function (value) {
            this._capacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "capacityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RuleGroup.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Wafv2RuleGroup.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "lockToken", {
        // lock_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lock_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RuleGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Wafv2RuleGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RuleGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Wafv2RuleGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "rule", {
        get: function () {
            return this.interpolationForAttribute('rule');
        },
        set: function (value) {
            this._rule = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2RuleGroup.prototype.resetRule = function () {
        this._rule = undefined;
    };
    Object.defineProperty(Wafv2RuleGroup.prototype, "ruleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "visibilityConfig", {
        get: function () {
            return this.interpolationForAttribute('visibility_config');
        },
        set: function (value) {
            this._visibilityConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2RuleGroup.prototype, "visibilityConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibilityConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Wafv2RuleGroup.prototype.synthesizeAttributes = function () {
        return {
            capacity: cdktf.numberToTerraform(this._capacity),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            rule: cdktf.listMapper(wafv2RuleGroupRuleToTerraform)(this._rule),
            visibility_config: cdktf.listMapper(wafv2RuleGroupVisibilityConfigToTerraform)(this._visibilityConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Wafv2RuleGroup.tfResourceType = "aws_wafv2_rule_group";
    return Wafv2RuleGroup;
}(cdktf.TerraformResource));
exports.Wafv2RuleGroup = Wafv2RuleGroup;
