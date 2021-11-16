"use strict";
// https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html
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
exports.SecurityhubInsight = void 0;
var cdktf = require("cdktf");
function securityhubInsightFiltersAwsAccountIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersCompanyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersComplianceStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersCreatedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersCriticalityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersDescriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersFirstObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersGeneratorIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersKeywordToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersLastObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersLastObservedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersMalwareNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersMalwarePathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersMalwareStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersMalwareTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr)
    };
}
function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr)
    };
}
function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersNetworkDirectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNetworkProtocolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr)
    };
}
function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr)
    };
}
function securityhubInsightFiltersNetworkSourceMacToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNetworkSourcePortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersNoteTextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersNoteUpdatedByToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersProcessNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProcessParentPidToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersProcessPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProcessPidToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte)
    };
}
function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProductFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersProductNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersRecommendationTextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersRecordStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersResourceContainerNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourcePartitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceRegionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersResourceTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersSeverityLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersSourceUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersTitleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value)
    };
}
function securityhubInsightFiltersUpdatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: cdktf.listMapper(securityhubInsightFiltersUpdatedAtDateRangeToTerraform)(struct.dateRange)
    };
}
function securityhubInsightFiltersUserDefinedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersVerificationStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersWorkflowStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value)
    };
}
function securityhubInsightFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        aws_account_id: cdktf.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform)(struct.awsAccountId),
        company_name: cdktf.listMapper(securityhubInsightFiltersCompanyNameToTerraform)(struct.companyName),
        compliance_status: cdktf.listMapper(securityhubInsightFiltersComplianceStatusToTerraform)(struct.complianceStatus),
        confidence: cdktf.listMapper(securityhubInsightFiltersConfidenceToTerraform)(struct.confidence),
        created_at: cdktf.listMapper(securityhubInsightFiltersCreatedAtToTerraform)(struct.createdAt),
        criticality: cdktf.listMapper(securityhubInsightFiltersCriticalityToTerraform)(struct.criticality),
        description: cdktf.listMapper(securityhubInsightFiltersDescriptionToTerraform)(struct.description),
        finding_provider_fields_confidence: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform)(struct.findingProviderFieldsConfidence),
        finding_provider_fields_criticality: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform)(struct.findingProviderFieldsCriticality),
        finding_provider_fields_related_findings_id: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform)(struct.findingProviderFieldsRelatedFindingsId),
        finding_provider_fields_related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform)(struct.findingProviderFieldsRelatedFindingsProductArn),
        finding_provider_fields_severity_label: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform)(struct.findingProviderFieldsSeverityLabel),
        finding_provider_fields_severity_original: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform)(struct.findingProviderFieldsSeverityOriginal),
        finding_provider_fields_types: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform)(struct.findingProviderFieldsTypes),
        first_observed_at: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform)(struct.firstObservedAt),
        generator_id: cdktf.listMapper(securityhubInsightFiltersGeneratorIdToTerraform)(struct.generatorId),
        id: cdktf.listMapper(securityhubInsightFiltersIdToTerraform)(struct.id),
        keyword: cdktf.listMapper(securityhubInsightFiltersKeywordToTerraform)(struct.keyword),
        last_observed_at: cdktf.listMapper(securityhubInsightFiltersLastObservedAtToTerraform)(struct.lastObservedAt),
        malware_name: cdktf.listMapper(securityhubInsightFiltersMalwareNameToTerraform)(struct.malwareName),
        malware_path: cdktf.listMapper(securityhubInsightFiltersMalwarePathToTerraform)(struct.malwarePath),
        malware_state: cdktf.listMapper(securityhubInsightFiltersMalwareStateToTerraform)(struct.malwareState),
        malware_type: cdktf.listMapper(securityhubInsightFiltersMalwareTypeToTerraform)(struct.malwareType),
        network_destination_domain: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform)(struct.networkDestinationDomain),
        network_destination_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform)(struct.networkDestinationIpv4),
        network_destination_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform)(struct.networkDestinationIpv6),
        network_destination_port: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform)(struct.networkDestinationPort),
        network_direction: cdktf.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform)(struct.networkDirection),
        network_protocol: cdktf.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform)(struct.networkProtocol),
        network_source_domain: cdktf.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform)(struct.networkSourceDomain),
        network_source_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform)(struct.networkSourceIpv4),
        network_source_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform)(struct.networkSourceIpv6),
        network_source_mac: cdktf.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform)(struct.networkSourceMac),
        network_source_port: cdktf.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform)(struct.networkSourcePort),
        note_text: cdktf.listMapper(securityhubInsightFiltersNoteTextToTerraform)(struct.noteText),
        note_updated_at: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform)(struct.noteUpdatedAt),
        note_updated_by: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform)(struct.noteUpdatedBy),
        process_launched_at: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform)(struct.processLaunchedAt),
        process_name: cdktf.listMapper(securityhubInsightFiltersProcessNameToTerraform)(struct.processName),
        process_parent_pid: cdktf.listMapper(securityhubInsightFiltersProcessParentPidToTerraform)(struct.processParentPid),
        process_path: cdktf.listMapper(securityhubInsightFiltersProcessPathToTerraform)(struct.processPath),
        process_pid: cdktf.listMapper(securityhubInsightFiltersProcessPidToTerraform)(struct.processPid),
        process_terminated_at: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform)(struct.processTerminatedAt),
        product_arn: cdktf.listMapper(securityhubInsightFiltersProductArnToTerraform)(struct.productArn),
        product_fields: cdktf.listMapper(securityhubInsightFiltersProductFieldsToTerraform)(struct.productFields),
        product_name: cdktf.listMapper(securityhubInsightFiltersProductNameToTerraform)(struct.productName),
        recommendation_text: cdktf.listMapper(securityhubInsightFiltersRecommendationTextToTerraform)(struct.recommendationText),
        record_state: cdktf.listMapper(securityhubInsightFiltersRecordStateToTerraform)(struct.recordState),
        related_findings_id: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform)(struct.relatedFindingsId),
        related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform)(struct.relatedFindingsProductArn),
        resource_aws_ec2_instance_iam_instance_profile_arn: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform)(struct.resourceAwsEc2InstanceIamInstanceProfileArn),
        resource_aws_ec2_instance_image_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform)(struct.resourceAwsEc2InstanceImageId),
        resource_aws_ec2_instance_ipv4_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform)(struct.resourceAwsEc2InstanceIpv4Addresses),
        resource_aws_ec2_instance_ipv6_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform)(struct.resourceAwsEc2InstanceIpv6Addresses),
        resource_aws_ec2_instance_key_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform)(struct.resourceAwsEc2InstanceKeyName),
        resource_aws_ec2_instance_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform)(struct.resourceAwsEc2InstanceLaunchedAt),
        resource_aws_ec2_instance_subnet_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform)(struct.resourceAwsEc2InstanceSubnetId),
        resource_aws_ec2_instance_type: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform)(struct.resourceAwsEc2InstanceType),
        resource_aws_ec2_instance_vpc_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform)(struct.resourceAwsEc2InstanceVpcId),
        resource_aws_iam_access_key_created_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform)(struct.resourceAwsIamAccessKeyCreatedAt),
        resource_aws_iam_access_key_status: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform)(struct.resourceAwsIamAccessKeyStatus),
        resource_aws_iam_access_key_user_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform)(struct.resourceAwsIamAccessKeyUserName),
        resource_aws_s3_bucket_owner_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform)(struct.resourceAwsS3BucketOwnerId),
        resource_aws_s3_bucket_owner_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform)(struct.resourceAwsS3BucketOwnerName),
        resource_container_image_id: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform)(struct.resourceContainerImageId),
        resource_container_image_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform)(struct.resourceContainerImageName),
        resource_container_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform)(struct.resourceContainerLaunchedAt),
        resource_container_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform)(struct.resourceContainerName),
        resource_details_other: cdktf.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform)(struct.resourceDetailsOther),
        resource_id: cdktf.listMapper(securityhubInsightFiltersResourceIdToTerraform)(struct.resourceId),
        resource_partition: cdktf.listMapper(securityhubInsightFiltersResourcePartitionToTerraform)(struct.resourcePartition),
        resource_region: cdktf.listMapper(securityhubInsightFiltersResourceRegionToTerraform)(struct.resourceRegion),
        resource_tags: cdktf.listMapper(securityhubInsightFiltersResourceTagsToTerraform)(struct.resourceTags),
        resource_type: cdktf.listMapper(securityhubInsightFiltersResourceTypeToTerraform)(struct.resourceType),
        severity_label: cdktf.listMapper(securityhubInsightFiltersSeverityLabelToTerraform)(struct.severityLabel),
        source_url: cdktf.listMapper(securityhubInsightFiltersSourceUrlToTerraform)(struct.sourceUrl),
        threat_intel_indicator_category: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform)(struct.threatIntelIndicatorCategory),
        threat_intel_indicator_last_observed_at: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform)(struct.threatIntelIndicatorLastObservedAt),
        threat_intel_indicator_source: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform)(struct.threatIntelIndicatorSource),
        threat_intel_indicator_source_url: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform)(struct.threatIntelIndicatorSourceUrl),
        threat_intel_indicator_type: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform)(struct.threatIntelIndicatorType),
        threat_intel_indicator_value: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform)(struct.threatIntelIndicatorValue),
        title: cdktf.listMapper(securityhubInsightFiltersTitleToTerraform)(struct.title),
        type: cdktf.listMapper(securityhubInsightFiltersTypeToTerraform)(struct.type),
        updated_at: cdktf.listMapper(securityhubInsightFiltersUpdatedAtToTerraform)(struct.updatedAt),
        user_defined_values: cdktf.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform)(struct.userDefinedValues),
        verification_state: cdktf.listMapper(securityhubInsightFiltersVerificationStateToTerraform)(struct.verificationState),
        workflow_status: cdktf.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform)(struct.workflowStatus)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight}
*/
var SecurityhubInsight = /** @class */ (function (_super) {
    __extends(SecurityhubInsight, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubInsightConfig
    */
    function SecurityhubInsight(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_securityhub_insight',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._groupByAttribute = config.groupByAttribute;
        _this._name = config.name;
        _this._filters = config.filters;
        return _this;
    }
    Object.defineProperty(SecurityhubInsight.prototype, "arn", {
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
    Object.defineProperty(SecurityhubInsight.prototype, "groupByAttribute", {
        get: function () {
            return this.getStringAttribute('group_by_attribute');
        },
        set: function (value) {
            this._groupByAttribute = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInsight.prototype, "groupByAttributeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupByAttribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInsight.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInsight.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInsight.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInsight.prototype, "filters", {
        get: function () {
            return this.interpolationForAttribute('filters');
        },
        set: function (value) {
            this._filters = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityhubInsight.prototype, "filtersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filters;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecurityhubInsight.prototype.synthesizeAttributes = function () {
        return {
            group_by_attribute: cdktf.stringToTerraform(this._groupByAttribute),
            name: cdktf.stringToTerraform(this._name),
            filters: cdktf.listMapper(securityhubInsightFiltersToTerraform)(this._filters)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecurityhubInsight.tfResourceType = "aws_securityhub_insight";
    return SecurityhubInsight;
}(cdktf.TerraformResource));
exports.SecurityhubInsight = SecurityhubInsight;
