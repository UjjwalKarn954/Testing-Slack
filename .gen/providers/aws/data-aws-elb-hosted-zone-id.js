"use strict";
// https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html
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
exports.DataAwsElbHostedZoneId = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html aws_elb_hosted_zone_id}
*/
var DataAwsElbHostedZoneId = /** @class */ (function (_super) {
    __extends(DataAwsElbHostedZoneId, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html aws_elb_hosted_zone_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElbHostedZoneIdConfig = {}
    */
    function DataAwsElbHostedZoneId(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_elb_hosted_zone_id',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._region = config.region;
        return _this;
    }
    Object.defineProperty(DataAwsElbHostedZoneId.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsElbHostedZoneId.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsElbHostedZoneId.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(DataAwsElbHostedZoneId.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsElbHostedZoneId.prototype.synthesizeAttributes = function () {
        return {
            region: cdktf.stringToTerraform(this._region)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsElbHostedZoneId.tfResourceType = "aws_elb_hosted_zone_id";
    return DataAwsElbHostedZoneId;
}(cdktf.TerraformDataSource));
exports.DataAwsElbHostedZoneId = DataAwsElbHostedZoneId;
