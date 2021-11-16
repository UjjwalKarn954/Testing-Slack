"use strict";
// https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html
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
exports.DataAwsOutpostsOutposts = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts}
*/
var DataAwsOutpostsOutposts = /** @class */ (function (_super) {
    __extends(DataAwsOutpostsOutposts, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostsConfig = {}
    */
    function DataAwsOutpostsOutposts(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_outposts_outposts',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._availabilityZoneId = config.availabilityZoneId;
        _this._ownerId = config.ownerId;
        _this._siteId = config.siteId;
        return _this;
    }
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "arns", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutposts.prototype.resetAvailabilityZone = function () {
        this._availabilityZone = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "availabilityZoneId", {
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        set: function (value) {
            this._availabilityZoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutposts.prototype.resetAvailabilityZoneId = function () {
        this._availabilityZoneId = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "availabilityZoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZoneId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "ids", {
        // ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "ownerId", {
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        set: function (value) {
            this._ownerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutposts.prototype.resetOwnerId = function () {
        this._ownerId = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "ownerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "siteId", {
        get: function () {
            return this.getStringAttribute('site_id');
        },
        set: function (value) {
            this._siteId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutposts.prototype.resetSiteId = function () {
        this._siteId = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutposts.prototype, "siteIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._siteId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsOutpostsOutposts.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
            owner_id: cdktf.stringToTerraform(this._ownerId),
            site_id: cdktf.stringToTerraform(this._siteId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOutpostsOutposts.tfResourceType = "aws_outposts_outposts";
    return DataAwsOutpostsOutposts;
}(cdktf.TerraformDataSource));
exports.DataAwsOutpostsOutposts = DataAwsOutpostsOutposts;
