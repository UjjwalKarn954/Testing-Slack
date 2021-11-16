"use strict";
// https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html
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
exports.GuarddutyIpset = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html aws_guardduty_ipset}
*/
var GuarddutyIpset = /** @class */ (function (_super) {
    __extends(GuarddutyIpset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_ipset.html aws_guardduty_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyIpsetConfig
    */
    function GuarddutyIpset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_guardduty_ipset',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._activate = config.activate;
        _this._detectorId = config.detectorId;
        _this._format = config.format;
        _this._location = config.location;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(GuarddutyIpset.prototype, "activate", {
        get: function () {
            return this.getBooleanAttribute('activate');
        },
        set: function (value) {
            this._activate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "activateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._activate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "detectorId", {
        get: function () {
            return this.getStringAttribute('detector_id');
        },
        set: function (value) {
            this._detectorId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "detectorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._detectorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "format", {
        get: function () {
            return this.getStringAttribute('format');
        },
        set: function (value) {
            this._format = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "formatInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._format;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "location", {
        get: function () {
            return this.getStringAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyIpset.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(GuarddutyIpset.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GuarddutyIpset.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    GuarddutyIpset.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(GuarddutyIpset.prototype, "tagsAllInput", {
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
    GuarddutyIpset.prototype.synthesizeAttributes = function () {
        return {
            activate: cdktf.booleanToTerraform(this._activate),
            detector_id: cdktf.stringToTerraform(this._detectorId),
            format: cdktf.stringToTerraform(this._format),
            location: cdktf.stringToTerraform(this._location),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    GuarddutyIpset.tfResourceType = "aws_guardduty_ipset";
    return GuarddutyIpset;
}(cdktf.TerraformResource));
exports.GuarddutyIpset = GuarddutyIpset;
