"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html
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
exports.Ec2ManagedPrefixList = void 0;
var cdktf = require("cdktf");
function ec2ManagedPrefixListEntryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
        description: cdktf.stringToTerraform(struct.description)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}
*/
var Ec2ManagedPrefixList = /** @class */ (function (_super) {
    __extends(Ec2ManagedPrefixList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListConfig
    */
    function Ec2ManagedPrefixList(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_managed_prefix_list',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._addressFamily = config.addressFamily;
        _this._maxEntries = config.maxEntries;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._entry = config.entry;
        return _this;
    }
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "addressFamily", {
        get: function () {
            return this.getStringAttribute('address_family');
        },
        set: function (value) {
            this._addressFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "addressFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addressFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "maxEntries", {
        get: function () {
            return this.getNumberAttribute('max_entries');
        },
        set: function (value) {
            this._maxEntries = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "maxEntriesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxEntries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ManagedPrefixList.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ManagedPrefixList.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "entry", {
        get: function () {
            return this.interpolationForAttribute('entry');
        },
        set: function (value) {
            this._entry = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2ManagedPrefixList.prototype.resetEntry = function () {
        this._entry = undefined;
    };
    Object.defineProperty(Ec2ManagedPrefixList.prototype, "entryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._entry;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2ManagedPrefixList.prototype.synthesizeAttributes = function () {
        return {
            address_family: cdktf.stringToTerraform(this._addressFamily),
            max_entries: cdktf.numberToTerraform(this._maxEntries),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            entry: cdktf.listMapper(ec2ManagedPrefixListEntryToTerraform)(this._entry)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2ManagedPrefixList.tfResourceType = "aws_ec2_managed_prefix_list";
    return Ec2ManagedPrefixList;
}(cdktf.TerraformResource));
exports.Ec2ManagedPrefixList = Ec2ManagedPrefixList;
