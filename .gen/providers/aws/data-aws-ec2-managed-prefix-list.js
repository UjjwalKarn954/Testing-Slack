"use strict";
// https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html
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
exports.DataAwsEc2ManagedPrefixList = exports.DataAwsEc2ManagedPrefixListEntries = void 0;
var cdktf = require("cdktf");
var DataAwsEc2ManagedPrefixListEntries = /** @class */ (function (_super) {
    __extends(DataAwsEc2ManagedPrefixListEntries, _super);
    function DataAwsEc2ManagedPrefixListEntries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEc2ManagedPrefixListEntries.prototype, "cidr", {
        // cidr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cidr');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixListEntries.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEc2ManagedPrefixListEntries;
}(cdktf.ComplexComputedList));
exports.DataAwsEc2ManagedPrefixListEntries = DataAwsEc2ManagedPrefixListEntries;
function dataAwsEc2ManagedPrefixListFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}
*/
var DataAwsEc2ManagedPrefixList = /** @class */ (function (_super) {
    __extends(DataAwsEc2ManagedPrefixList, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2ManagedPrefixListConfig = {}
    */
    function DataAwsEc2ManagedPrefixList(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        _this._name = config.name;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "addressFamily", {
        // ==========
        // ATTRIBUTES
        // ==========
        // address_family - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('address_family');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    // entries - computed: true, optional: false, required: false
    DataAwsEc2ManagedPrefixList.prototype.entries = function (index) {
        return new DataAwsEc2ManagedPrefixListEntries(this, 'entries', index);
    };
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "maxEntries", {
        // max_entries - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_entries');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2ManagedPrefixList.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2ManagedPrefixList.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEc2ManagedPrefixList.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsEc2ManagedPrefixList.prototype, "filterInput", {
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
    DataAwsEc2ManagedPrefixList.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsEc2ManagedPrefixListFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEc2ManagedPrefixList.tfResourceType = "aws_ec2_managed_prefix_list";
    return DataAwsEc2ManagedPrefixList;
}(cdktf.TerraformDataSource));
exports.DataAwsEc2ManagedPrefixList = DataAwsEc2ManagedPrefixList;
