"use strict";
// https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html
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
exports.DataAwsOutpostsOutpost = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost}
*/
var DataAwsOutpostsOutpost = /** @class */ (function (_super) {
    __extends(DataAwsOutpostsOutpost, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost.html aws_outposts_outpost} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostConfig = {}
    */
    function DataAwsOutpostsOutpost(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_outposts_outpost',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._ownerId = config.ownerId;
        return _this;
    }
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "availabilityZone", {
        // availability_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "availabilityZoneId", {
        // availability_zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('availability_zone_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutpost.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "ownerId", {
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        set: function (value) {
            this._ownerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsOutpostsOutpost.prototype.resetOwnerId = function () {
        this._ownerId = undefined;
    };
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "ownerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsOutpostsOutpost.prototype, "siteId", {
        // site_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('site_id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsOutpostsOutpost.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            owner_id: cdktf.stringToTerraform(this._ownerId)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsOutpostsOutpost.tfResourceType = "aws_outposts_outpost";
    return DataAwsOutpostsOutpost;
}(cdktf.TerraformDataSource));
exports.DataAwsOutpostsOutpost = DataAwsOutpostsOutpost;
