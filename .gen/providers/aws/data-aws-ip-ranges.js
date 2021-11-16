"use strict";
// https://www.terraform.io/docs/providers/aws/d/ip_ranges.html
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
exports.DataAwsIpRanges = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html aws_ip_ranges}
*/
var DataAwsIpRanges = /** @class */ (function (_super) {
    __extends(DataAwsIpRanges, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ip_ranges.html aws_ip_ranges} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIpRangesConfig
    */
    function DataAwsIpRanges(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ip_ranges',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._regions = config.regions;
        _this._services = config.services;
        _this._url = config.url;
        return _this;
    }
    Object.defineProperty(DataAwsIpRanges.prototype, "cidrBlocks", {
        // ==========
        // ATTRIBUTES
        // ==========
        // cidr_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('cidr_blocks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "createDate", {
        // create_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('create_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "ipv6CidrBlocks", {
        // ipv6_cidr_blocks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv6_cidr_blocks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "regions", {
        get: function () {
            return this.getListAttribute('regions');
        },
        set: function (value) {
            this._regions = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIpRanges.prototype.resetRegions = function () {
        this._regions = undefined;
    };
    Object.defineProperty(DataAwsIpRanges.prototype, "regionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._regions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "services", {
        get: function () {
            return this.getListAttribute('services');
        },
        set: function (value) {
            this._services = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "servicesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._services;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "syncToken", {
        // sync_token - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('sync_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsIpRanges.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsIpRanges.prototype.resetUrl = function () {
        this._url = undefined;
    };
    Object.defineProperty(DataAwsIpRanges.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsIpRanges.prototype.synthesizeAttributes = function () {
        return {
            regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
            services: cdktf.listMapper(cdktf.stringToTerraform)(this._services),
            url: cdktf.stringToTerraform(this._url)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsIpRanges.tfResourceType = "aws_ip_ranges";
    return DataAwsIpRanges;
}(cdktf.TerraformDataSource));
exports.DataAwsIpRanges = DataAwsIpRanges;
