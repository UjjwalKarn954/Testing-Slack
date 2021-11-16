"use strict";
// https://www.terraform.io/docs/providers/aws/d/partition.html
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
exports.DataAwsPartition = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/partition.html aws_partition}
*/
var DataAwsPartition = /** @class */ (function (_super) {
    __extends(DataAwsPartition, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/partition.html aws_partition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPartitionConfig = {}
    */
    function DataAwsPartition(scope, id, config) {
        if (config === void 0) { config = {}; }
        return _super.call(this, scope, id, {
            terraformResourceType: 'aws_partition',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
    }
    Object.defineProperty(DataAwsPartition.prototype, "dnsSuffix", {
        // ==========
        // ATTRIBUTES
        // ==========
        // dns_suffix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('dns_suffix');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPartition.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPartition.prototype, "partition", {
        // partition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('partition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsPartition.prototype, "reverseDnsPrefix", {
        // reverse_dns_prefix - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('reverse_dns_prefix');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsPartition.prototype.synthesizeAttributes = function () {
        return {};
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsPartition.tfResourceType = "aws_partition";
    return DataAwsPartition;
}(cdktf.TerraformDataSource));
exports.DataAwsPartition = DataAwsPartition;
