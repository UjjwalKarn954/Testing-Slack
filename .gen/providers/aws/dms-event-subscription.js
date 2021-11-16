"use strict";
// https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html
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
exports.DmsEventSubscription = void 0;
var cdktf = require("cdktf");
function dmsEventSubscriptionTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription}
*/
var DmsEventSubscription = /** @class */ (function (_super) {
    __extends(DmsEventSubscription, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_event_subscription.html aws_dms_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsEventSubscriptionConfig
    */
    function DmsEventSubscription(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dms_event_subscription',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._enabled = config.enabled;
        _this._eventCategories = config.eventCategories;
        _this._name = config.name;
        _this._snsTopicArn = config.snsTopicArn;
        _this._sourceIds = config.sourceIds;
        _this._sourceType = config.sourceType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DmsEventSubscription.prototype, "arn", {
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
    Object.defineProperty(DmsEventSubscription.prototype, "enabled", {
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEventSubscription.prototype.resetEnabled = function () {
        this._enabled = undefined;
    };
    Object.defineProperty(DmsEventSubscription.prototype, "enabledInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "eventCategories", {
        get: function () {
            return this.getListAttribute('event_categories');
        },
        set: function (value) {
            this._eventCategories = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "eventCategoriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventCategories;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "snsTopicArn", {
        get: function () {
            return this.getStringAttribute('sns_topic_arn');
        },
        set: function (value) {
            this._snsTopicArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "snsTopicArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._snsTopicArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "sourceIds", {
        get: function () {
            return this.getListAttribute('source_ids');
        },
        set: function (value) {
            this._sourceIds = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEventSubscription.prototype.resetSourceIds = function () {
        this._sourceIds = undefined;
    };
    Object.defineProperty(DmsEventSubscription.prototype, "sourceIdsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "sourceType", {
        get: function () {
            return this.getStringAttribute('source_type');
        },
        set: function (value) {
            this._sourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEventSubscription.prototype.resetSourceType = function () {
        this._sourceType = undefined;
    };
    Object.defineProperty(DmsEventSubscription.prototype, "sourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEventSubscription.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DmsEventSubscription.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEventSubscription.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DmsEventSubscription.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DmsEventSubscription.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DmsEventSubscription.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DmsEventSubscription.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DmsEventSubscription.prototype.synthesizeAttributes = function () {
        return {
            enabled: cdktf.booleanToTerraform(this._enabled),
            event_categories: cdktf.listMapper(cdktf.stringToTerraform)(this._eventCategories),
            name: cdktf.stringToTerraform(this._name),
            sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
            source_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._sourceIds),
            source_type: cdktf.stringToTerraform(this._sourceType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: dmsEventSubscriptionTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DmsEventSubscription.tfResourceType = "aws_dms_event_subscription";
    return DmsEventSubscription;
}(cdktf.TerraformResource));
exports.DmsEventSubscription = DmsEventSubscription;
