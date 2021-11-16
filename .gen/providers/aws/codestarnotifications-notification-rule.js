"use strict";
// https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html
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
exports.CodestarnotificationsNotificationRule = void 0;
var cdktf = require("cdktf");
function codestarnotificationsNotificationRuleTargetToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        address: cdktf.stringToTerraform(struct.address),
        type: cdktf.stringToTerraform(struct.type)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule}
*/
var CodestarnotificationsNotificationRule = /** @class */ (function (_super) {
    __extends(CodestarnotificationsNotificationRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html aws_codestarnotifications_notification_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarnotificationsNotificationRuleConfig
    */
    function CodestarnotificationsNotificationRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codestarnotifications_notification_rule',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._detailType = config.detailType;
        _this._eventTypeIds = config.eventTypeIds;
        _this._name = config.name;
        _this._resource = config.resource;
        _this._status = config.status;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._target = config.target;
        return _this;
    }
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "arn", {
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
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "detailType", {
        get: function () {
            return this.getStringAttribute('detail_type');
        },
        set: function (value) {
            this._detailType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "detailTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detailType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "eventTypeIds", {
        get: function () {
            return this.getListAttribute('event_type_ids');
        },
        set: function (value) {
            this._eventTypeIds = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "eventTypeIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventTypeIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "resource", {
        get: function () {
            return this.getStringAttribute('resource');
        },
        set: function (value) {
            this._resource = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "resourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarnotificationsNotificationRule.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarnotificationsNotificationRule.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarnotificationsNotificationRule.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "target", {
        get: function () {
            return this.interpolationForAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarnotificationsNotificationRule.prototype.resetTarget = function () {
        this._target = undefined;
    };
    Object.defineProperty(CodestarnotificationsNotificationRule.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CodestarnotificationsNotificationRule.prototype.synthesizeAttributes = function () {
        return {
            detail_type: cdktf.stringToTerraform(this._detailType),
            event_type_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._eventTypeIds),
            name: cdktf.stringToTerraform(this._name),
            resource: cdktf.stringToTerraform(this._resource),
            status: cdktf.stringToTerraform(this._status),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            target: cdktf.listMapper(codestarnotificationsNotificationRuleTargetToTerraform)(this._target)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodestarnotificationsNotificationRule.tfResourceType = "aws_codestarnotifications_notification_rule";
    return CodestarnotificationsNotificationRule;
}(cdktf.TerraformResource));
exports.CodestarnotificationsNotificationRule = CodestarnotificationsNotificationRule;
