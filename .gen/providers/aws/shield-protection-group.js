"use strict";
// https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html
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
exports.ShieldProtectionGroup = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html aws_shield_protection_group}
*/
var ShieldProtectionGroup = /** @class */ (function (_super) {
    __extends(ShieldProtectionGroup, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/shield_protection_group.html aws_shield_protection_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProtectionGroupConfig
    */
    function ShieldProtectionGroup(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_shield_protection_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._aggregation = config.aggregation;
        _this._members = config.members;
        _this._pattern = config.pattern;
        _this._protectionGroupId = config.protectionGroupId;
        _this._resourceType = config.resourceType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(ShieldProtectionGroup.prototype, "aggregation", {
        get: function () {
            return this.getStringAttribute('aggregation');
        },
        set: function (value) {
            this._aggregation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "aggregationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._aggregation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "members", {
        get: function () {
            return this.getListAttribute('members');
        },
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ShieldProtectionGroup.prototype.resetMembers = function () {
        this._members = undefined;
    };
    Object.defineProperty(ShieldProtectionGroup.prototype, "membersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._members;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "protectionGroupArn", {
        // protection_group_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('protection_group_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "protectionGroupId", {
        get: function () {
            return this.getStringAttribute('protection_group_id');
        },
        set: function (value) {
            this._protectionGroupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "protectionGroupIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protectionGroupId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "resourceType", {
        get: function () {
            return this.getStringAttribute('resource_type');
        },
        set: function (value) {
            this._resourceType = value;
        },
        enumerable: false,
        configurable: true
    });
    ShieldProtectionGroup.prototype.resetResourceType = function () {
        this._resourceType = undefined;
    };
    Object.defineProperty(ShieldProtectionGroup.prototype, "resourceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ShieldProtectionGroup.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ShieldProtectionGroup.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShieldProtectionGroup.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ShieldProtectionGroup.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ShieldProtectionGroup.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ShieldProtectionGroup.prototype.synthesizeAttributes = function () {
        return {
            aggregation: cdktf.stringToTerraform(this._aggregation),
            members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
            pattern: cdktf.stringToTerraform(this._pattern),
            protection_group_id: cdktf.stringToTerraform(this._protectionGroupId),
            resource_type: cdktf.stringToTerraform(this._resourceType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ShieldProtectionGroup.tfResourceType = "aws_shield_protection_group";
    return ShieldProtectionGroup;
}(cdktf.TerraformResource));
exports.ShieldProtectionGroup = ShieldProtectionGroup;
