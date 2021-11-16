"use strict";
// https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html
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
exports.DataAwsCloudformationStack = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack}
*/
var DataAwsCloudformationStack = /** @class */ (function (_super) {
    __extends(DataAwsCloudformationStack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationStackConfig
    */
    function DataAwsCloudformationStack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudformation_stack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsCloudformationStack.prototype, "capabilities", {
        // ==========
        // ATTRIBUTES
        // ==========
        // capabilities - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('capabilities');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "disableRollback", {
        // disable_rollback - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('disable_rollback');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "iamRoleArn", {
        // iam_role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "notificationArns", {
        // notification_arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('notification_arns');
        },
        enumerable: false,
        configurable: true
    });
    // outputs - computed: true, optional: false, required: false
    DataAwsCloudformationStack.prototype.outputs = function (key) {
        return new cdktf.StringMap(this, 'outputs').lookup(key);
    };
    // parameters - computed: true, optional: false, required: false
    DataAwsCloudformationStack.prototype.parameters = function (key) {
        return new cdktf.StringMap(this, 'parameters').lookup(key);
    };
    Object.defineProperty(DataAwsCloudformationStack.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCloudformationStack.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsCloudformationStack.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "templateBody", {
        // template_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('template_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCloudformationStack.prototype, "timeoutInMinutes", {
        // timeout_in_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('timeout_in_minutes');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCloudformationStack.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCloudformationStack.tfResourceType = "aws_cloudformation_stack";
    return DataAwsCloudformationStack;
}(cdktf.TerraformDataSource));
exports.DataAwsCloudformationStack = DataAwsCloudformationStack;
