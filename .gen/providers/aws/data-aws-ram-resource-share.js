"use strict";
// https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html
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
exports.DataAwsRamResourceShare = void 0;
var cdktf = require("cdktf");
function dataAwsRamResourceShareFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share}
*/
var DataAwsRamResourceShare = /** @class */ (function (_super) {
    __extends(DataAwsRamResourceShare, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRamResourceShareConfig
    */
    function DataAwsRamResourceShare(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ram_resource_share',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._resourceOwner = config.resourceOwner;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsRamResourceShare.prototype, "arn", {
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
    Object.defineProperty(DataAwsRamResourceShare.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "owningAccountId", {
        // owning_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owning_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "resourceOwner", {
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        set: function (value) {
            this._resourceOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "resourceOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._resourceOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRamResourceShare.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsRamResourceShare.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsRamResourceShare.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsRamResourceShare.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsRamResourceShare.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsRamResourceShare.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            resource_owner: cdktf.stringToTerraform(this._resourceOwner),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsRamResourceShareFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsRamResourceShare.tfResourceType = "aws_ram_resource_share";
    return DataAwsRamResourceShare;
}(cdktf.TerraformDataSource));
exports.DataAwsRamResourceShare = DataAwsRamResourceShare;
