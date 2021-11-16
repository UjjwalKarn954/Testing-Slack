"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssm_association.html
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
exports.SsmAssociation = void 0;
var cdktf = require("cdktf");
function ssmAssociationOutputLocationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        s3_bucket_name: cdktf.stringToTerraform(struct.s3BucketName),
        s3_key_prefix: cdktf.stringToTerraform(struct.s3KeyPrefix)
    };
}
function ssmAssociationTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association}
*/
var SsmAssociation = /** @class */ (function (_super) {
    __extends(SsmAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmAssociationConfig
    */
    function SsmAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._applyOnlyAtCronInterval = config.applyOnlyAtCronInterval;
        _this._associationName = config.associationName;
        _this._automationTargetParameterName = config.automationTargetParameterName;
        _this._complianceSeverity = config.complianceSeverity;
        _this._documentVersion = config.documentVersion;
        _this._instanceId = config.instanceId;
        _this._maxConcurrency = config.maxConcurrency;
        _this._maxErrors = config.maxErrors;
        _this._name = config.name;
        _this._parameters = config.parameters;
        _this._scheduleExpression = config.scheduleExpression;
        _this._outputLocation = config.outputLocation;
        _this._targets = config.targets;
        return _this;
    }
    Object.defineProperty(SsmAssociation.prototype, "applyOnlyAtCronInterval", {
        get: function () {
            return this.getBooleanAttribute('apply_only_at_cron_interval');
        },
        set: function (value) {
            this._applyOnlyAtCronInterval = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetApplyOnlyAtCronInterval = function () {
        this._applyOnlyAtCronInterval = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "applyOnlyAtCronIntervalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._applyOnlyAtCronInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "associationId", {
        // association_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('association_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "associationName", {
        get: function () {
            return this.getStringAttribute('association_name');
        },
        set: function (value) {
            this._associationName = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetAssociationName = function () {
        this._associationName = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "associationNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._associationName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "automationTargetParameterName", {
        get: function () {
            return this.getStringAttribute('automation_target_parameter_name');
        },
        set: function (value) {
            this._automationTargetParameterName = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetAutomationTargetParameterName = function () {
        this._automationTargetParameterName = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "automationTargetParameterNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automationTargetParameterName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "complianceSeverity", {
        get: function () {
            return this.getStringAttribute('compliance_severity');
        },
        set: function (value) {
            this._complianceSeverity = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetComplianceSeverity = function () {
        this._complianceSeverity = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "complianceSeverityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._complianceSeverity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "documentVersion", {
        get: function () {
            return this.getStringAttribute('document_version');
        },
        set: function (value) {
            this._documentVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetDocumentVersion = function () {
        this._documentVersion = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "documentVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._documentVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "instanceId", {
        get: function () {
            return this.getStringAttribute('instance_id');
        },
        set: function (value) {
            this._instanceId = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetInstanceId = function () {
        this._instanceId = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "instanceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "maxConcurrency", {
        get: function () {
            return this.getStringAttribute('max_concurrency');
        },
        set: function (value) {
            this._maxConcurrency = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetMaxConcurrency = function () {
        this._maxConcurrency = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "maxConcurrencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxConcurrency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "maxErrors", {
        get: function () {
            return this.getStringAttribute('max_errors');
        },
        set: function (value) {
            this._maxErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetMaxErrors = function () {
        this._maxErrors = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "maxErrorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "scheduleExpression", {
        get: function () {
            return this.getStringAttribute('schedule_expression');
        },
        set: function (value) {
            this._scheduleExpression = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetScheduleExpression = function () {
        this._scheduleExpression = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "scheduleExpressionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scheduleExpression;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "outputLocation", {
        get: function () {
            return this.interpolationForAttribute('output_location');
        },
        set: function (value) {
            this._outputLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetOutputLocation = function () {
        this._outputLocation = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "outputLocationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._outputLocation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsmAssociation.prototype, "targets", {
        get: function () {
            return this.interpolationForAttribute('targets');
        },
        set: function (value) {
            this._targets = value;
        },
        enumerable: false,
        configurable: true
    });
    SsmAssociation.prototype.resetTargets = function () {
        this._targets = undefined;
    };
    Object.defineProperty(SsmAssociation.prototype, "targetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targets;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsmAssociation.prototype.synthesizeAttributes = function () {
        return {
            apply_only_at_cron_interval: cdktf.booleanToTerraform(this._applyOnlyAtCronInterval),
            association_name: cdktf.stringToTerraform(this._associationName),
            automation_target_parameter_name: cdktf.stringToTerraform(this._automationTargetParameterName),
            compliance_severity: cdktf.stringToTerraform(this._complianceSeverity),
            document_version: cdktf.stringToTerraform(this._documentVersion),
            instance_id: cdktf.stringToTerraform(this._instanceId),
            max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
            max_errors: cdktf.stringToTerraform(this._maxErrors),
            name: cdktf.stringToTerraform(this._name),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
            output_location: cdktf.listMapper(ssmAssociationOutputLocationToTerraform)(this._outputLocation),
            targets: cdktf.listMapper(ssmAssociationTargetsToTerraform)(this._targets)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsmAssociation.tfResourceType = "aws_ssm_association";
    return SsmAssociation;
}(cdktf.TerraformResource));
exports.SsmAssociation = SsmAssociation;
